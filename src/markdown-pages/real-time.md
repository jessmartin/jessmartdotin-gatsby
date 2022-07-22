---
slug: "articles/real-time"
date: 2021-11-15
title: "DRAFT: Concerns When Building Real-time Multi-user Applications"
pageType: article
---

# DRAFT: Concerns of Real-time Multi-user Applications
This is a guide to help people who are building applications in which multiple users interact with each other in real time. My goal is to clarify some of the terms, lay out a conceptual architecture, and suggest some concrete directions for getting started.

## What is a real-time, multi-user app?
At its simplest, a real-time, multi-user application consists of an application where multiple connected users are experiencing and interacting with the application in real time.

Application users see the application’s interface update in real time, as soon as changes are made by other users.

## Concerns
All real-time, multi-user applications have the following concerns[1]. We will explore each of these concerns in detail below.

* Authorization
* Networking
* Serialization
* Routing
* State synchronization
* Data Structure
* Persistence
* Code updates
* User interface

### Authorization
Authorization concerns who is allowed to connect to the application.

### Networking
Networking concerns how messages are transmitted between users of the application. Common networking protocols for real-collaborative applications are WebSockets, WebRTC, and HTTP.

### Serialization
Serialization concerns how the content of messages are converted to a wire-friendly format that can be safely transmitted by the networking layer.

### Routing
Routing concerns where messages should be delivered and ensures that messages are only delivered to appropriate destinations. Many libraries provide routing services through some form of “session” that routes messages to users connected to a session. Some libraries provide a publish/subscribe model for more sophisticated routing.

### State Synchronization
State synchronization concerns how the distributed state is synchronized across all users of the application. This may include a method of handling conflict resolution, or may simply follow a naive strategy such as “last one in wins.”

### Data Structure
Data structure concerns how the state is stored within the application. Some libraries provide robust data structures like key-value stores or relational databases. Other libraries leave the data structure entirely up to the application author. Still another approach is to provide a JSON-like object with the ability to merge in changes.

### Persistence
Persistence concerns how the state is persisted over time. When the last user disconnects from the application, the state should be persisted so that application can continue from where it left off. Even if sessions are intended to be disposable, persistence is needed for the case of momentary disruptions for users. Without persistence, a brief internet outage or other disruption might seem like all users are disconnecting, causing the state to be lost and the application to reset.

### Code updates
Code updates concerns how the code and data model that runs the application is updated, particularly in the midst of a real-time session. This is a tricky topic because it involves a series of trade-offs. Should users in an active session receive the new code as soon as it is available? If so, the application author needs to ensure that changes to the code don’t cause visual glitches or data corruption. If active session users do not update to the new code immediately, then when a new user connects to an existing session running the old code, multiple users are in the same application running different versions.

### User Interface
User interface concerns keeping the UI in sync with the state as it changes. Many libraries leave this step up to the application author, but some offer helper UI libraries that map onto their data structure in order to automatically update the UI.

[1] This breakdown was inspired by a [visual of the GunDB architecture](https://camo.githubusercontent.com/96b27be847f73485e63914530b3d9e75ee56adbc7b9ae44b22190a329292fa5a/68747470733a2f2f67756e2e65636f2f7365652f6c61796572732e706e67).