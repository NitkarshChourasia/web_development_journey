from flask import Flask

app = Flask(__name__)


@app.route("/")
@app.route("/home")
def home():  # Not necessary to have same def name as route name
    return "<h1>Hello, World!</h1>"


@app.route("/about")
def about():
    page_title = "<h1>About Page</h1>"
    owner_name = "<h2>Nitkarsh Chourasia</h2>"
    return f"{page_title}\n{owner_name}"


if __name__ == "__main__":
    app.run(debug=True)
