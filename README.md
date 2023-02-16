## Steps: 

### Open `http://localhost:3000/graphql` and run the following: 
```
subscription {
  userCreated { 
    name
    age
  }
}
```

### Publish the sample message: 
```
jq -rc . sample-msg.json | kafka-console-producer --bootstrap-server broker-3-cc6v0bnbh8jsqxsp.kafka.svc07.us-south.eventstreams.cloud.ibm.com:9093  --producer.config .kafka.properties --topic Backend
```


## Diagram
<img width="223" alt="image" src="https://user-images.githubusercontent.com/26101260/219225593-54d3562f-78a9-4d9a-9559-da8784ff8843.png">
