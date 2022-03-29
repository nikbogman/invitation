import requests 

a = [{'name': 'Ninova', 'coming': False}, {'name': 'Bojichkova', 'coming': False}, {'name': 'Drenska', 'coming': False}, {'name': 'Pushkarova', 'coming': False}, {'name': 'Mitova', 'coming': False}, {'name': 'Hikova', 'coming': False}, {'name': 'Polendakova', 'coming': False}, {'name': 'Cholakova', 'coming': False}, {'name': 'Manchorov', 'coming': False}, {'name': 'Manchorova', 'coming': False}, {'name': 'Anastasov', 'coming': False}, {'name': 'Borisov', 'coming': False}, {'name': 'Yordanov', 'coming': False}, {'name': 'Popov', 'coming': False}, {'name': 'Amzina', 'coming': False}, {'name': 'Tonev', 'coming': False}, {'name': 'Hristova', 'coming': False}, {'name': 'Veselinova', 'coming': False}, {'name': 'Elenkova', 'coming': False}, {'name': 'Nolan', 'coming': False}, {'name': 'Gulubova', 'coming': False}, {'name': 'Pushkarova', 'coming': False}]

for i in a:
	print(i)
	requests.post("http://127.0.0.1:8000/teachers/", data=i)
