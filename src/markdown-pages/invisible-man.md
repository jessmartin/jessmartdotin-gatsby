---
slug: "articles/invisible"
date: 2021-11-10
title: "The Invisible Man Problem: The frustration of real-time collaboration experiences with software"
pageType: article
featured: no
---

# The Invisible Man Problem

Why do collaboration experiences in applications feel so frustrating?

INSERT: Picture of playing a board game

Imagine for a moment you're playing a board game with someone, in the real world. You sit down across from them and the game is laid out on a table in front of you. As you play together, you casual observation of your opponent gives you a tremendous amount of information. You can tell from following their eyes what part of the board their focusing on. If their hand is hovering over a piece without touching it, they are clearly considering whether or not to move that piece. If they are leaned in towards the board, eyes closed, perhaps they are concentrating. If they are leaned back, staring blankly around the room or scrolling their phone, they might be distracted. If they are looking up at you, they might be waiting on you to say something or take your turn.

We have a term for this: body language. Our physical bodies *communicate*, whether we like it or not. We even have a term for the lack of communication from one's body–poker face–and it's a skill that must be developed. It's universally thought that training our bodies to _not_ communicate actually takes practice.

INSERT: Picture of kids playing together

**Our physical body and physical spaces offer incredible affordances for understanding the actions and intentions of those we are collaborating with.** Furthermore, we have decades worth of experience and social norms about how to act constructively in those spaces. Think about how we teach young children to "play well with others": 

- don't snatch toys from others
- give others personal space
- wait your turn to look at something someone else is looking at
- don't interrupt someone when they are talking or concentrating

These social norms act like a social contract that significantly reduces friction when collaborating with others.

Unfortunately, collaborative experiences in software have shed many of those affordances and social cues. 

INSERT: another picture of a board game?

To get a feel for this frustration, imagine again playing a board game in the real world, but this time you are playing with an invisible man. As you wait for them to take their turn, you have no idea what they are doing. Are they considering a specific move? Are they concentrating or distracted? Are they even sitting at the table, or have they gone to the restroom? Pieces would move about the board without warning, cards would flip over unexpectedly. Just as you reach for a piece, it's plucked from the table and moved out of your reach. You look away for a moment and the state of the board changes, yet you can't tell what was moved. It would be extremely disconcerting.

Collaborative experiences in applications are a lot like playing that board game with an invisble man: disconcerting, to say the least.

Let's consider a couple of applications that tend to have multiple users collaborating in real time, and show some of the confusing interactions that can result when the environment fails to communicate effectively.

## Trello

Trello is a well-known Kanban board tool that allows users to arrange cards into a series of vertical lists. Each card has a title, a description, and numerous other fields such as comments. Users can drag cards between lists, reorder cards within lists, edit the content of cards, add new cards, delete cards. Importantly, Trello allows multiple users to view and edit the same board simultaneously.

Here are some questions you might have while collaborating with others in Trello:

**Who is looking at the board right now?** Trello has no sense of _presence_ on the board itself. You might be the only one currently looking at the board, or this could be a standup and your entire team of ten is in. Nothing about the UI gives any indication.

**What are they looking at? Are they looking at a specific card?** Within a single Trello board, you can either be looking at the list view or the card view. Someone may have their cursor hovering over a card you're about to move, or someone may have opened a card you're about to archive.

**What are people editing?** Someone may be editing the title of a card, the description of a card, or entering a comment on a card. No way to know.

**What card is someone looking at in a long list?** Lists in Trello can get quite long, and cards can get "buried" in the middle or bottom of a list. Since each person connected to a board can have different scroll positions within a list, it's impossible to know that another user is actually pointing to a card that's not "on screen" for you.

**What cards are being dragged right now?** Trello supports drag-and-drop between lists but only shows the animation to the user doing the dragging. This can lead to destructive actions happening during a drag, the real world equivalent of snatching an item from someone's hand while they're moving it from one place to another.

**Is anyone editing or viewing the card I'm about to archive or delete?** Whenever I'm about to do a destructive action like archiving or deleting, it would be nice to know if another user is currently editing or viewing the card or list I'm about to remove from the board.

Trello does a good job of immediately updating the board for all users as changes are made. However, this merely serves to increase the user's perplexity as items snap and jump around, titles change instantaneously, comments pop into existence.

You're collaborating with an invisible person.

## Augmenting the UI with presence and intention

How could we make this better?

Core design ideas:

- "reveal intention"
- presence and/or location

Ideas:

- where are people - what card 
-  "presentation mode" - follow like in VS Code LiveShare
- If drag animations were shared between users, dragging could be used in unexpected ways to garner attention: imagine picking up a card and "shaking" it.
- Sharing cursors is just a start
- Google Docs shows presence indicators - greyed out when inactive
- animate in-progress work
- reveal what changed
