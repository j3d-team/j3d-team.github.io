---
title: "데이터 가공의 또다른 방식 Stream Processing"
author: "J2"
metaTitle: "Request-Response, Batch Processing, Stream Processing"
metaDescription: "요청-응답, 배치등의 데이터 가공방식과는 다른 스트림 프로세싱에 대해 알아보자"
---

데이터를 가공 하는 방식에는 수많은 방식이 있지만 기존부터 존재하는 Request-Response와 Batch Processing 방식이 있다.
이들의 방식은 각각의 장단점이 있는데 Request-Response와 Batch Processing의 중간 방식인 Stream Processing에 대해 알아보자.

1. Request-Response
2. Batch Processing
3. Stream Processing

## 1. Request-Response
![Request-Response](./kafka/request-response.png)  
데이터 처리량이 적으며, 지연 시간이 가장 적은 데이터 처리 방식이다. 
특징으로는 짧은 응답 시간(1ms ~)을 가진다. 
그러나 애플리케이션이 요청을 전송한 후 프로세싱 시스템의 응답을 기다려야 한다.
데이터베이스에서는 OLTP(online transaction processing)라고 하며 POS(point of sale) 시스템, 신용카드 시스템, 실시간 추적시스템, Web 등 사용자 요청에 바로 응답을 필요로하는 데이터 처리 방식을 사용 한다.

## 2. Batch Processing
![Batch Processing](./kafka/batch-process.png)  
데이터 처리량이 많으며, 지연 시간도 오래걸리는 데이터 처리 방식이다.
예를 들어, 매일 새벽 2시 또는 매시간 등이다. 
필요한 모든 데이터를 읽어서 처리하며, 프로세싱 후에 원하는 출력 데이터를 사용 한다. 
데이터 마이닝이나, 일간 랭킹, 레포트 생성 등 사용 된다.
이 데이터 처리 방식은 효율성이 좋으며 매우 경제적 이다. 
그러나 근래에는 기간이 짧게 처리 하는 방식을 선호 하는 편이다.

## 3. Stream Processing
![Stream Processing](./kafka/stream-process.png)  
입력 데이터가 연속적이며, 중단되지 않는 데이터 처리 방식이다. Request-Reponse와 Batch Processing간의 격차를 줄여 준다.
예를 들어, 체크 카드로 결제 시 결제 취소 요청을 하면 즉시 응답을 할 필요는 없지만, 사용자는 통장에 돈이 들어오는지 다음날까지 기다릴순 없으므로 Stream Processing으로 처리하는것이 바람직 하다.
이와 같이 대부분 비즈니스 프로세스는 연속적으로 발생하게 된다.  

