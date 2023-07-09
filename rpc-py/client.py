import rpyc
connection = rpyc.connect('localhost', 18811)
print(connection.root.foo())
print(connection.root.bar())