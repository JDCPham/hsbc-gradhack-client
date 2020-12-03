import random


data = []
for iterIdx in range(1000):
    data.append("Dancing," + "2019-{mon}-{day} {hr}:00:00,".format(mon=random.randint(10, 11),
                                                    day=random.randint(10, 28),
                                                    hr=random.randint(10,18)) + \
    "{revenue}".format(revenue=random.randint(10, 500)))
for iterIdx in range(1000):
    data.append("Dancing," + "2019-{mon}-{day} {hr}:00:00,".format(mon=random.randint(11, 12),
                                                    day=random.randint(10, 28),
                                                    hr=random.randint(10,18)) + \
    "{revenue}".format(revenue=random.randint(50, 700)))

with open("fakeData.csv", "w") as openfile:
    for row in data:
        openfile.write(row + "\n")