import pymysql
# 打开数据库连接
db = pymysql.connect("localhost", "fastab", "123456", "address")
# 使用cursor()方法获取操作游标
cursor = db.cursor()
# SQL 查询语句
sql = "SELECT * FROM lamp_address WHERE id <= 10"
try:
    # 执行SQL语句
    cursor.execute(sql)
    # 获取所有记录列表
    results = cursor.fetchall()
    for row in results:
        # 打印结果
        print(row)
except:
    print("Error: unable to fetch data")
# 关闭数据库连接
db.close()
