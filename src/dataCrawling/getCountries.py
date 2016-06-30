import json
countryList = json.load(open("./src/assets/countries.json"))

continentList = json.load(open("./src/assets/country-continents.json"))

NA = []
SA = []
AS = []
EU = []
AF = []
OC = []
data = [{
  "NA": NA,
  "SA": SA,
  "AF": AF,
  "AS": AS,
  "EU": EU,
  "OC": OC
}]

for country in continentList["countries"]:
  continent = continentList["countries"][country]["continent"]
  data[0][continent].append(
    continentList["countries"][country]["name"]
    )

for continent in data[0]:
  for country in countryList:
    for i, countryName in enumerate(data[0][continent]):
      if country["english"] == countryName:
        data[0][continent][i] = {
          "english": countryName,
          "french": country["french"]
        }
print data[0]["AF"]

with open("countries-by-continents.json", "w") as outf:
    json.dump(data[0], outf, indent=1)
