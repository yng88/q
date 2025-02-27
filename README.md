# 定期的に変更されるものを追跡するリポジトリ

```
wget -O ./expected/japan_postal_codes.zip https://www.post.japanpost.jp/zipcode/dl/utf/zip/utf_ken_all.zip

wget -O ./expected/syukujitsu.csv https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv

unzip tmp/japan_postal_codes.zip -d ./current/

diff ./expected/utf_ken_all.csv ./current/utf_ken_all.csv
```