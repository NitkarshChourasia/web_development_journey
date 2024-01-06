import datetime
from flask import Flask, jsonify
from flask_cors import CORS

# Initializing Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS


class Person:
    DEFAULT_PROG_LANG = "Python"

    def __init__(self, name, age, prog_lang=None):
        self.name = name
        self.age = age
        self.prog_lang = prog_lang or self.DEFAULT_PROG_LANG
        self._date_now = None

    @property
    def date_now(self):
        if not self._date_now:
            self._date_now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        return self._date_now

    def to_json(self):
        """Converts the Person object to a JSON representation."""
        return {
            "name": self.name,
            "age": self.age,
            "date": self.date_now,
            "programming": self.prog_lang,
        }


# Route for fetching data
@app.route("/data")
def get_data():
    """Returns JSON data for a list of Person objects."""
    people = [
        Person("Nitkarsh", 23),
        Person("Purshotam", 20),
        Person("Amreen", 21),
        Person("Pallavi", 25),
    ]

    data = {index: person.to_json() for index, person in enumerate(people)}
    return jsonify(data)


# Running the app
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
