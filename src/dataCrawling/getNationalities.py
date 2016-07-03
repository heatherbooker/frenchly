from bs4 import BeautifulSoup
import json


def getNationalities():
  soup = BeautifulSoup(open("nationalities.htm"))
  rows = soup.find("table").find('tbody').find_all("tr")

  countries = []
  nationalities = {}
  for i, row in enumerate(rows):
    if i % 2 == 0:
      cells = row.find_all("td")
      country = cells[0].get_text()
      countries.append(country)
    elif i % 2 != 0:
      cells = row.find_all("td")
      french = cells[1].get_text()
      if "/" in french:
        frenchMasc = french.partition('/')[0].title()
        if french.endswith("/e") or french.endswith("/ne"):
          #if following / is: "e" or "ne", add post-slash chars to pre-slash for fem.
          frenchFem = french.partition('/')[0].title() + french.partition('/')[2]
        else:
          #else, pre-slash is masc and post-slash is femom
          frenchFem = french.partition('/')[2].title()
      else:
        frenchMasc = frenchFem = french.title()
      nationalities[country] = {
        "englishN": cells[0].get_text().title(),
        "frenchN": [frenchMasc, frenchFem]
      }
  return countries, nationalities

def main():
  countriesJson = json.load(open("../assets/countries-by-continent.json"))
  data = countriesJson
  countriesWithNationalities = getNationalities()
  for continent in data:
    for i, country in enumerate(data[continent]):
      if country["englishC"] in countriesWithNationalities[0]:
        nationalities = countriesWithNationalities[1][country["englishC"]]
        data[continent][i]["nationalities"] = nationalities

  with open("nations_outfile.json", "w") as outf:
    json.dump(data, outf, indent=1)

main()
