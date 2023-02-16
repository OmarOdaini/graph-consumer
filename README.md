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
<img width="488" alt="image" src="https://user-images.githubusercontent.com/26101260/219248868-5552a771-2de2-4408-9ecf-770d6f628a62.png">
