const dgram = require('dgram');

const server = dgram.createSocket('udp4');

// 서버가 메시지를 수신할 때 발생하는 이벤트
server.on('message', (msg, rinfo) => {
  console.log(`서버에서 메시지 수신: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

// 서버가 에러를 처리할 때 발생하는 이벤트
server.on('error', (err) => {
  console.error(`서버 에러:\n${err.stack}`);
  server.close();
});

// 서버가 소켓을 닫을 때 발생하는 이벤트
server.on('close', () => {
  console.log('UDP 서버 종료');
});

// 서버가 소켓을 개방하고 대기할 IP 주소와 포트 지정
const serverPort = 3000;
const serverAddress = '127.0.0.1';

server.bind(serverPort, serverAddress, () => {
  console.log(`UDP 서버가 ${serverAddress}:${serverPort}에서 대기 중...`);
});
