import json
import os
import sys

def validate_data():
    file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data.json')
    
    if not os.path.exists(file_path):
        print(f"Error: {file_path} does not exist.")
        sys.exit(1)
        
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON format. {e}")
        sys.exit(1)
        
    if not isinstance(data, list):
        print("Error: JSON root must be a list of objects.")
        sys.exit(1)
        
    required_keys = {"time", "chaos_index", "chaos_metrics", "decision", "prediction", "before_vs_after", "system_status"}
    metrics_keys = {"traffic", "weather", "energy", "health"}
    decision_keys = {"cause", "action_taken", "expected_impact"}
    
    has_error = False
    for index, itm in enumerate(data):
        if not isinstance(itm, dict):
            print(f"Error at JSON index {index}: Item is not an object.")
            has_error = True
            continue
            
        missing = required_keys - itm.keys()
        if missing:
            print(f"Error at JSON index {index}: Missing required keys: {missing}")
            has_error = True
            continue

        metrics = itm.get("chaos_metrics", {})
        if not isinstance(metrics, dict) or metrics_keys - metrics.keys():
            print(f"Error at JSON index {index}: Invalid or missing chaos_metrics {metrics_keys}")
            has_error = True

        decision = itm.get("decision", {})
        if not isinstance(decision, dict) or decision_keys - decision.keys():
            print(f"Error at JSON index {index}: Invalid or missing decision details {decision_keys}")
            has_error = True
            
    if has_error:
        sys.exit(1)
        
    print(f"Success: Validated {len(data)} CityOS events securely. New Chaos Index schema verified.")

if __name__ == "__main__":
    validate_data()
