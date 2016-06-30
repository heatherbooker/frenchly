from bs4 import BeautifulSoup
import json

def main():
  soup = BeautifulSoup(open("countries.htm"))
  tables = soup.find_all("table")
  data = []

  for table in tables:
    rows = table.find("tbody").find_all("tr")
    for row in rows:
      cells = row.find_all("td")
      if len(cells) > 4:
        data.append({
          "english": cells[1].get_text(),
          "french": cells[2].get_text()
        })
  with open("my_output.json", "w") as outf:
    json.dump(data, outf, indent=1)

main()
