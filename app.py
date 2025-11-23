from __future__ import annotations

import json
from pathlib import Path

from flask import Flask, jsonify, render_template


app = Flask(__name__, static_folder="static", template_folder="templates")

BASE_DIR = Path(__file__).parent
WORDS_PATH = BASE_DIR / "data" / "words.json"


def load_words() -> dict:
    """Load word sets from data/words.json."""
    with WORDS_PATH.open("r", encoding="utf-8") as f:
        return json.load(f)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/words")
def api_words():
    words = load_words()
    return jsonify(words)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
