from flask import Flask,render_template,request

app = Flask(__name__)

# 首页
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/goods')
def goods():
    return render_template('goods.html')



@app.route('/check',methods=['GET'])
def check():
    # 数据库里的账户信息
    account_info = {'username':'admin','password':'123456'}
    # 获取用户输入的数值
    p_username = request.values['username']
    p_password = request.values['password']
    print(p_username, p_password)
    if p_username == account_info['username'] and p_password == account_info['password']:
        print(1)
        return "1" #检验通过
    else:
        print(0)
        return "0" #检验不通过

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=80,debug=True)
