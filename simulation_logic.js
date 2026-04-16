// simulation_logic.js

const WEIGHTS = {
    traffic: 0.30,
    weather: 0.25,
    energy: 0.20,
    health: 0.25
};

function calculateChaosIndex(metrics) {
    if (!metrics) return 0;

    // Calculate the weighted Chaos Index based on CityOS-2035 parameters
    const t = (metrics.traffic || 0) * WEIGHTS.traffic;
    const w = (metrics.weather || 0) * WEIGHTS.weather;
    const e = (metrics.energy || 0) * WEIGHTS.energy;
    const h = (metrics.health || 0) * WEIGHTS.health;

    return t + w + e + h;
}

function getSystemStatus(chaosIndex) {
    if (chaosIndex <= 30) return "Stable";
    if (chaosIndex <= 60) return "Adapting";
    return "Critical";
}

// Function to simulate real time processing on new event data
function processEventData(event) {
    // If the data doesn't have a pre-calculated index, do it here
    if (event.chaos_index === undefined && event.chaos_metrics) {
        event.chaos_index = calculateChaosIndex(event.chaos_metrics);
    }

    // Verify system status
    event.system_status = getSystemStatus(event.chaos_index);

    // Simulate AI prediction
    if (!event.prediction) {
        event.prediction = Math.max(0, event.chaos_index - 15); // AI implicitly reduces chaos by ~15%
    }

    return event;
}

// Global Banner Injection Logic
function checkGlobalChaos(events) {
    if (!events || events.length === 0) return;

    // Determine the highest recent chaos index to trigger banners
    const latestEvent = events[events.length - 1];
    if (latestEvent.chaos_index > 80) {
        showGlobalWarning(latestEvent.chaos_index);
    }
}

function showGlobalWarning(chaosIndex) {
    // Remove existing warning to prevent duplicates
    const exist = document.getElementById('chaos-warning');
    if (exist) exist.remove();

    const warnBanner = document.createElement('div');
    warnBanner.id = 'chaos-warning';
    warnBanner.innerHTML = `
        <style>
            #chaos-warning {
                background: rgba(217, 4, 41, 0.15);
                border: 2px solid var(--accent-danger);
                color: var(--text-primary);
                padding: 1.5rem 2rem;
                border-radius: 12px;
                margin: 0 auto 3rem auto;
                max-width: 800px;
                text-align: center;
                font-family: 'Share Tech Mono', monospace;
                font-size: 1.5rem;
                box-shadow: 0 0 20px rgba(217, 4, 41, 0.4);
                animation: dangerPulse 1.5s infinite;
                letter-spacing: 2px;
            }
            
            #chaos-warning .highlight {
                color: var(--accent-danger);
                font-weight: 800;
                text-shadow: 0 0 10px rgba(217, 4, 41, 0.8);
                font-size: 2.2rem;
            }
            
            #chaos-warning .subtext {
                display: block;
                font-size: 1rem;
                margin-top: 0.5rem;
                color: var(--text-secondary);
                letter-spacing: 4px;
            }

            @keyframes dangerPulse {
                0% { box-shadow: 0 0 10px rgba(217, 4, 41, 0.2); border-color: rgba(217, 4, 41, 0.4); }
                50% { box-shadow: 0 0 40px rgba(217, 4, 41, 0.8); border-color: rgba(217, 4, 41, 1); }
                100% { box-shadow: 0 0 10px rgba(217, 4, 41, 0.2); border-color: rgba(217, 4, 41, 0.4); }
            }
        </style>
        SYSTEM ALERT: GLOBAL CHAOS INDEX AT <span class="highlight">${chaosIndex.toFixed(1)}%</span>
        <span class="subtext">EMERGENCY PROTOCOLS TRIGGERED</span>
    `;

    const header = document.querySelector('.dashboard-header');
    if (header) {
        header.parentNode.insertBefore(warnBanner, header.nextSibling);
    }
}
