from bs4 import BeautifulSoup
import json

def getNationalities:
  soup = BeautifulSoup(open("nationalities.htm"))
  rows = soup.find("table").find('tbody').find_all("tr")

  nationalities = []
  for i, row in enumerate(rows):
    if i % 2 == 0:
      cells = row.find_all("td")
      country = cells[0].get_text()
    elif i % 2 != 0:
      cells = row.find_all("td")
      french = cells[1].get_text()
      if "/" in french:
        frenchMasc = french.partition('/')[0].title()
        if french.endswith("/e") or french.endswith("/ne"):
          #if following / is: "e" or "ne", add post-slash chars to pre-slash for fem.
          frenchFem = french.partition('/')[0].title() + french.partition('/')[2]
        else:
          #else, pre-slash is masc and post-slash is fem
          frenchFem = french.partition('/')[2].title()
      nationalities.append({
        "country": country,
        "nationalityEnglish": cells[0].get_text().title(),
        "nationalityFrench": [frenchMasc, frenchFem]
      })
  return nationalities
