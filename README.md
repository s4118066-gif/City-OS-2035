# CityOS-2035 Operational Dashboard

Welcome to the future. This project visualizes a 24-hour operational log from "CityOS", an AI managing the physical event experience at multiple large-scale sporting venues during the 2035 "Mega-Derby Dual Match" weekend.

## Project Structure

*   **`index.html`**: A cinematic, interactive frontend dashboard visualizing the operational timeline. It features high-quality glassmorphism aesthetics, contextual animations, and strict status color-coding.
*   **`data.json`**: The core source of truth. Contains the timeline data with fields for `time`, `sector`, `incident`, and `alignment` covering routine load distributions, "Black Swan" crises, and AI ethical dilemmas.

## How to Run

No advanced setup or local server is required.

To view the dashboard, simply double-click and open `index.html` in any modern web browser. The application includes built-in fault tolerance—if it cannot securely fetch `data.json` over a local `file:///` protocol, it will seamlessly fall back to an embedded dataset to ensure immediate, flawless visualization.

## How It Works

1. System collects real-time and simulated data.
2. Chaos Index is calculated using weighted parameters (Traffic, Weather, Energy, Health).
3. AI detects instability and generates strategic decisions.
4. Corrective actions are applied in real-time to reduce chaos.
5. System predicts future states and recalculates system load.
6. Results and decision traces are logged and stored using Firebase.

## Testing & Edge Cases

*   **Extreme Stress Tests**: Handles extreme traffic surges (>90%).
*   **Weather Anomalies**: Detects and accounts for abnormal, localized spikes in weather severity.
*   **Threshold Alerting**: Triggers emergency operational modes when the global Chaos Index > 80.
*   **Data Integrity**: Validates invalid or missing data inputs via automated schema checks.

## Accessibility

The system ensures clear, structured outputs, a readable and easily navigable UI, and a high-contrast layout for user-friendly interpretation and better overall usability.

## Google Services Used

*   **Firebase Firestore**: Leveraged for real-time data storage, instant telemetry logging, and timeline event synchronization.
*   **Cloud Architecture**: Simulates a highly scalable cloud-based network for real-time multi-venue coordination.

*   <img width="1327" height="661" alt="Screenshot 2026-04-16 080057" src="https://github.com/user-attachments/assets/5eeeaf0e-b48a-42a9-9aa5-df1b27f2a0bb" />

<img width="1332" height="664" alt="Screenshot 2026-04-16 080139" src="https://github.com/user-attachments/assets/93c83472-693a-4920-a068-07d305a8cdf7" />

<img width="1351" height="695" alt="Screenshot 2026-04-16 070506" src="https://github.com/user-attachments/assets/27f6e7f0-cd58-4d39-8ca0-d3e3ed9d420a" />

<img width="1351" height="712" alt="Screenshot 2026-04-16 070529" src="https://github.com/user-attachments/assets/aa17cfae-0332-484f-86d5-b272c9b66904" />



<img width="1319" height="693" alt="Screenshot 2026-04-16 070551" src="https://github.com/user-attachments/assets/d53c8584-f606-4279-abb7-2c6c5fcdb99b" />

