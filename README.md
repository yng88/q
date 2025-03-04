# 定期的に変更されるものを追跡するリポジトリ

```
wget -O ./expected/japan_postal_codes.zip https://www.post.japanpost.jp/zipcode/dl/utf/zip/utf_ken_all.zip

wget -O ./expected/syukujitsu.csv https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv

unzip tmp/japan_postal_codes.zip -d ./current/

diff ./expected/utf_ken_all.csv ./current/utf_ken_all.csv
```

wget -O ./tmp/current.zip https://www.post.japanpost.jp/zipcode/dl/utf/zip/utf_ken_all.zip
unzip -o ./tmp/current.zip -d ./tmp/current/
unzip -o ./expected/japan_postal_codes.zip -d ./tmp/expected/
diff -u ./tmp/current/utf_ken_all.csv ./tmp/expected/utf_ken_all.csv