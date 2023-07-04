import socket
from vidstream import ScreenShareClient

ip='172.19.88.8'
port=8101
msg=b"hello sama"
sock=socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
sender = ScreenShareClient(ip,port)
#sender.start_stream()
#while input("")!="stop":
sock.sendto(bytes(str(sender.start_stream()),'utf-8'),(ip,port))
 #continue
sock.sendto(msg, (ip,port))

