# Day starts on April 1st
infected = 200000
deaths = 4500

for day in range(60):
    print("Day {}".format(day))
    #rate at which infected and deaths increase
    rate = .06
    infected += int((infected * rate))
    deaths += int((deaths * rate))
    print("Infected: {}, Dead: {}".format(infected, deaths))