package main

import (
  "fmt"
  "log"
  "net/http"
)

func getBlobContent(w http.ResponseWriter, r *http.Request) {
  fmt.Println(r.Method, r.Host, r.URL, r.Header)
}

func handleRequests() {
  http.HandleFunc("/api", getBlobContent)
  log.Fatal(http.ListenAndServe(":8080", nil))
}

func main() {
  fmt.Println("Starting development server")
  fmt.Println("https://127.0.0.1:8080/")
  handleRequests()
}
