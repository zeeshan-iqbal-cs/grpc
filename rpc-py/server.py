# server.py
from rpyc.utils.server import ThreadedServer
import rpyc


@rpyc.service
class TestService(rpyc.Service):
    @rpyc.exposed
    def foo(self):
        return 'foo'

    @rpyc.exposed
    def bar(self):
        return 'bar'


print('starting server')


server = ThreadedServer(TestService, port=18811)
server.start()
