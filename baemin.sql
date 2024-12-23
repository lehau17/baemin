input {
http {
port => 5044
}
}
output {
elasticsearch {
hosts => ["https://elasticsearch:9200"]
ssl => true
ssl_certificate_verification => false # Bỏ qua kiểm tra chứng chỉ SSL
user => "elastic" # Tên người dùng
password => "aFSrXTddiE+X1KgfGS8-" # Mật khẩu
index => "service-log-%{+YYYY.MM.dd}" # Tên của index trong Elasticsearch
document_id => "%{id}" # Dùng cột 'id' của bảng làm ID của document
}
stdout { codec => rubydebug } # In ra console để kiểm tra
}