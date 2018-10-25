from flask import Flask, render_template,request,json

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('1.html')


@app.route('/test')
def test():
    return render_template('2.html')


@app.route('/table')
def table():
    return render_template('3.html')


@app.route('/get_data')
def get_data():
    import pymysql
    # 打开数据库连接
    db = pymysql.connect("127.0.0.1", "fastab", "123456", "address")
    # 使用cursor()方法获取操作游标
    cursor = db.cursor()
    print(cursor)
    # SQL 查询语句
    sql = "SELECT * FROM lamp_address WHERE id <= 10"
    try:
        # 执行SQL语句
        cursor.execute("use address")
        cursor.execute(sql)
        # 获取所有记录列表
        results = cursor.fetchall()
        data = ""
        for row in results:
            # 打印结果
            print(row)
            data += "<tr><td>"+row[1]+"</td>" + "<td>" + \
                str(row[2])+"</td>" + "<td>"+str(row[3])+"</td></tr>"

        print(data)
    except Exception as e:
        print(e)
        print("Error: unable to fetch data")
        # 关闭数据库连接
    finally:
        cursor.close()
        db.close()
    # return data
    return data

@app.route('/get_info')
def get_info():
    return render_template('4.html')

@app.route('/get_mod')
def get_mod():
    info = {}
    data = request.values
    for k,v in data.items():
        info[k] = v
    return json.dumps(info)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)
