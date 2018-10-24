from flask import Flask,render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('1.html')


@app.route('/test')
def test():
    return render_template('2.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=80,debug=True)
