import socket
import threading
import pymongo
from dotenv import load_dotenv
import os
from concurrent.futures import ThreadPoolExecutor

load_dotenv()

mongo_url = os.getenv("MONGO_URL")
mongo_client = pymongo.MongoClient(mongo_url)
db = mongo_client["Clicker"]
collection = db["current_count"]

MAX_THREADS = 100

def udp_server(host, port):
    udp_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    udp_socket.bind((host, port))
    print(f"UDP server listening on {host}:{port}")

    # with ThreadPoolExecutor(MAX_THREADS) as executor:
    while True:
        print("Starting to receive data")
        data, addr = udp_socket.recvfrom(1024)
        print(f"Received {data} from {addr}")
        # executor.submit(decrement_count)
        decrement_count()

def decrement_count():
    print("Decrementing count by 1")
    collection.update_one({}, {"$inc": {"count": -1}})
    print("Decremented count by 1")

if __name__ == "__main__":
    HOST = "0.0.0.0"
    PORT = 8888

    server_thread = threading.Thread(target=udp_server, args=(HOST, PORT))
    server_thread.start()
