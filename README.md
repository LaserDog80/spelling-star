# Spelling Star (scaffold)

Lightweight local web app for handwriting-based spelling practice. Runs on a desktop with Python/Flask and is reachable from an iPad over home Wi‑Fi.

## Requirements
- Python 3.9+
- pip

## Install
```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Run
```bash
export FLASK_APP=app.py          # Windows PowerShell: $env:FLASK_APP="app.py"
flask run --host 0.0.0.0 --port 5000
```
Keep the terminal open while running.

## Connect from iPad
1) Find your desktop’s local IP:
   - macOS: `ipconfig getifaddr en0`
   - Windows: `ipconfig` (look for IPv4 under Wi‑Fi)
2) On the iPad (same Wi‑Fi), open Safari/Chrome and visit `http://<your-ip>:5000` (example `http://192.168.1.20:5000`).

## Word lists
- Edit `data/words.json` to change sets. Example:
```json
{ "setA": ["as", "got", "her", "pull", "full"] }
```
- Restart the Flask server after changes.

## Progress (optional, not wired yet)
- `data/progress.json` reserved for saving attempts.

## Notes
- This is scaffold only; game logic, rewards, and progress save will be added next.
