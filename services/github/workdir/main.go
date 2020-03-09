package main

import (
  "fmt"
  "log"
  "net/http"
  // "io/ioutil"
  "encoding/json"
)

type UserMessage struct {
  Url string `json:"url"`
}

type Blob struct {
  Blob string `json:"blob"`
}

func getBlobContent(w http.ResponseWriter, request *http.Request) {
  fmt.Println(request.Method, request.Host, request.URL)

  // Check request method
  if (request.Method != "POST") {
    http.Error(w, "Only POST method", 405)
    return
  }

  // Initialize empty Blob struct
  blob := Blob{}
  // Initialize empty UserMessage struct
  userMessage := UserMessage{}

  err := json.NewDecoder(request.Body).Decode(&userMessage)
  if err != nil {
    panic(err)
  }

  blob.Blob = userMessage.Url

  blobJson, err := json.Marshal(blob)
  if err != nil {
    panic(err)
  }

  w.Write(blobJson)
}

func handleRequests() {
  http.HandleFunc("/api", getBlobContent)
  log.Fatal(http.ListenAndServe(":8080", nil))
}

func main() {
  fmt.Println("Starting development server")
  fmt.Println("http://127.0.0.1:8080/")
  handleRequests()
}
