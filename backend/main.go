package main

import (
	"log"
	"net/http"
)

func main(){
	fs:= http.FileServer(http.Dir("./dist"))

	port := 3000

	http.Handle("/",fs)

	log.Printf("http://localhost:%d",port)

	err := http.ListenAndServe(":3000",nil)
	if err != nil {
		log.Fatal("서버 시작 실패",err)
	}
}