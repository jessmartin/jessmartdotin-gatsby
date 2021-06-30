---
slug: "articles/copilot"
date: 2021-06-30
title: "Copilot and Conversational Programming"
pageType: article
---

# Conversational Programming
A month ago, I got a demo of GitHub's [Copilot](https://copilot.github.com/) and I've been pondering the implications. Here's what I've realized: Copilot won't replace programmers, but it will change what it means to be a programmer. And that's a very good thing.

But before I can introduce the change, we need to talk about what programming is, where we are in the history of programming, and where we're going.

## Programming As Basic Literacy
Humans are Tool Makers. Programming represents one of the most powerful tools humanity has yet created, on par with the invention of spoken language and writing. Like speaking and writing, programming is an expressive medium. Programming is the ability to express one's will, to take "that which you wish to be true" and manifest it in the world. Speaking enables you to communicate your ideas. Writing enables you to capture and transmit them. Programming enables you to make your ideas executable. Moreover, programming will become a fundamental human capability. Like reading and writing before it, programming will morph and adapt over the next few hundred years and eventually spread through the human race until it's considered part of "basic literacy."

By the time programming becomes ubiquitous, it will barely resemble what we think of as programming today. To get a glimpse of how radically it will change, let's consider how writing has changed throughout history.

![](../images/escribano.jpg)

At one time, the only people trained in writing were a special group of people known as scribes. During that time, books were made by hand, painstakingly copied by professionals trained in the art. But that's not all a scribe did. Scribes "had to carefully cut sheets of parchment, make the ink, write the script, bind the pages, and create a cover to protect the script." [1](https://en.wikipedia.org/wiki/Scribe#Monastic_scribes)

Are the making of parchment and ink and the binding of pages intrinsically related to the skill of writing? 

We live in a tiny sliver of history when the ability to program is a skill reserved for a highly-trained class of people. Much of what we now called programming is actually just parchment-making and book-binding. Legitimate skills, and valuable ones, but not intrinsic to the practice of programming.

Will Copilot put programmers out of a job? No more than the invention of typewriters put scribes out of a job. What it will do is change the nature of the job. Copilot represents a paradigm shift for the practice of programming. 

The naive interpretation of Copilot is that it's enhanced autocomplete. I believe that's the wrong mental model. Instead, we should think of Copilot as a shift to a conversational model of programming.

## Conversations with an AI
About a year ago, I played with an [early demo](https://mobile.twitter.com/jessmartin/status/1284117578672230400) of a GPT-3 powered "teacher" that could impersonate any historical figure. The interface was similar to a chat interface. I talked to Elon Musk, Plato, Alan Kay. Below, you can read my conversation with Plato.

![Dialogue with GPT-3 as Plato](../images/plato-dialog-on-cave.png)

The interesting thing about this experience is how much it actually felt like talking with another human. The responses were rather long, yes. I found myself hearing a voice in my head while my reading. Just like talking to a human, I found that my question wasn't quite understood and I had to find a way to make myself clear. The conversation moved forward naturally as each response led me to formulate my next question.

And even more interesting, a few months later I found myself wishing for an AI that I could converse with throughout the day. I missed the interaction, and was sad that the beta software was no longer available.

I believe programming with Copilot is going to become more of a dialogue between a programmer and the computer. It will change how we work.

## Towards Programming as Conversation
When digital computers were being pioneered, the inventors frequently pondered the ramifications. Unencumbered by much of the programming apparatus we have today and unstained by decades of practice, they could more easily see the fundamentals and envision how they would play out.

For example, in 1967 Marvin Minsky was arguing with his colleagues about how we should think about writing programs. He [wrote](https://web.media.mit.edu/~minsky/papers/Why%20programming%20is--.html):
> The programmer does not even have to be exact in his own ideas‑he may have a range of acceptable computer answers in mind and may be content if the computer's answers do not step out of this range. The programmer does not have to fixate the computer with particular processes. In a range of uncertainty he may *ask* the computer to generate new procedures, or he may *recommend* rules of selection and give the computer *advice* about which choices to make. Thus, computers do not have to be programmed with extremely clear and precise formulations of what is to be executed, or how to do it.

Note the action verbs: ask, recommend, advise. Minsky understood, even in 1967, the possibility of a 2-way conversation between programmer and computer, where the program is written in collaboration. He contrasted his view with the view of a "program as a sequence of instructions to be obeyed." I'll refer to this view as "programming as dictation."

> The most common and simple‑minded view is that a computer program is a sequence of clear-cut operations to be performed on some data.

What we have with Copilot is a "good enough" tool that allows us to move from dictation to conversation. 

## IDE == Intent Development Environment
Copilot's first implementation is integrated into VS Code, a traditional IDE (integrated development environment). Starting inside an IDE is wise as it overcomes the primary risk for a technology like Copilot: disbelief. By integrating Copilot into an existing workflow, programmers can taste the utility for themselves.

Copilot is a program synthesizer that works by combining the program's context with "developer intent." [Alex Polozov](https://twitter.com/Skiminok) gives an excellent overview [in this thread](https://twitter.com/Skiminok/status/1409961744294838273). 

How should we capture developer intent in order to synthesize a program? Or, in Minsky's terms, "how should the programmer ask, recommend, and advise the computer?" 

IDEs have been optimized for many years around a model of programming as dictation. Programming as a process of conversation where intent and context are synthesized into programs implies a different set of constraints. New constraints demand new workflows for creating programs, and new workflows will lead to new tools.

Unfortunately, traditional IDEs constrain what workflows are possible. The most interesting embodiments of Copilot (and other program synthesis) will be in a new set of tools that are built from the ground up around a new set of constraints. 

What will those new tools look like? We have some clues.

## Tools for programming as conversation
I'm going to suggest three different principles we might employ for reinventing the development environment. Note that these principles are not mutually exclusive. A conversational programming system may employ one or more of them simultaneously.

### Principle #1: Program in plain english
One of the most startling moments from my Copilot demo was when Copilot synthesized an entire function from a single-line comment, written in English. If developer intent expressed in natural language is sufficient to synthesize implementations, perhaps a means to communicate in plain language might be a more natural interface.

### Principle #2: Create by Reacting
In Bret Victor's talk [Inventing on Principle](http://blog.ezyang.com/2012/02/transcript-of-inventing-on-principleb/), he talks about his principle for creators:
> Here's something I've come to believe: Creators need an immediate connection to what they're creating. That's my principle. Creators need an immediate connection to what they create. And what I mean by that is when you're making something, if you make a change, or you make a decision, you need to see the effect of that immediately. There can't be a delay, and there can't be anything hidden. Creators have to be able to see what they're doing.

He expands on this idea in [Learnable Programming](http://worrydream.com/LearnableProgramming/) and spells out a principle he calls "Creating by Reacting." Creating by Reacting is perhaps most widely applied today in live-reload environments where the UI updates along with changes to the code.

One of the challenges with Copilot as currently implemented is that the developer has to read the code that is synthesized (and carefully!) in order to determine whether Copilot's suggestion works as intended. In many cases, the developer wasn't interested in the code per se, but rather the output of the code. A visual representation of the output of the code might be a more natural means to communicate Copilot's suggestions.

Additionally, what if Copilot presented the programmer with three different visual outputs and allowed them to choose the most correct one?

### Principle #3: One rung up the ladder of abstraction
Currently, Copilot generates code and the traditional IDE is oriented around visualizing, manipulating, and navigating lines of code. Certain software systems are incredibly well-understood and could be represented by a higher-level abstraction than a file with code in it. For example, React components are remarkably consistent. Another example, full-stack web applications are a well-understood domain, so much so that we've had ["scaffold generators"](https://en.wikipedia.org/wiki/Scaffold_(programming)) for web apps for decades. Program synthesis could be used to not merely generate lines of code, but entire sets of files representing functionality at a slightly-higher level of abstraction.

## Promising Examples
Here are a few examples of suggestive interfaces and interactions that we could pull from.

**Microsoft Power Apps Ideas**
![GPT-3 powering Microsoft Power Apps](../images/power-apps-gpt-3.gif)

Microsoft has already started down this road by [integrating GPT-3 in Power Apps](https://blogs.microsoft.com/ai/from-conversation-to-code-microsoft-introduces-its-first-product-features-powered-by-gpt-3/). They added a sidebar inside their Power Apps IDE with a plain text box. Based on what you type in the box, Power Apps generates code for you, changes the interface, and presents help articles. It infers what you are trying to accomplish from context and the request.

[This video](https://www.youtube.com/watch?v=Qu9zdEfOP2A) shows a bunch of examples of Power Apps Ideas in action.

**Generating React Layouts**
Sharif Shameem [demonstrated a plain language interface for generating layouts in React](https://twitter.com/sharifshameem/status/1282676454690451457). He's now working on a full product to generate web applications called [debuild](https://debuild.co/).

**Chris Granger's Experimental Interface**
[Chris Granger](https://www.chris-granger.com/) of [LightTable](http://lighttable.com/) and [EVE](http://witheve.com/) fame has been [experimenting](https://twitter.com/ibdknox/status/1328797793138266113) with an interface for programming using natural language. 

--Insert transition paragraph here--

Copilot is a phenomenal achievement and a meaningful step forward in the history of programming. With the vision in sight of what is possible with program synthesis, we can envision bold new interfaces that move programming from dictation to conversation.

Be prepared to let go of your book-binding and ink-making. Mourn their loss, but rejoice that the joy of programming continues to spread!