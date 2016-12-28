CS-5220 User Interface Construction

Time Banking

Responsive User interface Design Document

Merituuli Melkko 217194

Dicle Ayzit 598499

- Introduction

- This report is a comprehensive document for the responsive user interface design of Time Banking project.

- The responsive user interface for Time Banking is implemented as a web user interface. The implemented web

- user interface follows certain guidelines and patterns that have been used for a while now in web design. The

- goal of this document is to represent the developed responsive user interface and show the reasoning of its

- being developed in that manner via representing its correspondence to existing design guidelines and former

- documentation of Command Line Interface Design of this project.

- The structure for the rest of the documents builds up to that objective. Related Works explains the decided

- technologies for the development of the responsive user interface. It also points out the basis of design

- decisions, being the chosen guidelines. Methodology section describes the responsive user interface design at

- a high-level and provides the evaluation criteria that will be followed through the analysis of the design. Results

- and Analysis section provides the actual verification of the design through the mentioned evaluation criteria.

- Finally, Discussion and Conclusions section explains whether the objective is reached and give a brief

- explanation on the realization of the developed responsive user interface.

- Related Works

- As the responsive user interface makes use of particular technologies and patterns, these should be

- mentioned with their reasoning in this document. This section involves this information.

- As our target audience is not expected to be the most technology or web literate community, we tried to create

- the design of the user interface as clean, simple and easy to follow as possible. To reach this objective, we

- examined several web user interfaces and tried to analyze which ones can be suited for our target audience.

- This examination involved world-wide used web platform(e.g. Facebook, Twitter etc.) as these target

- themselves for basically anyone who has access to Internet. This suits our goal of serving a community with

- limited access as well. We also took a look at existing design patterns to make our possible outcome more

- clear. We checked related patterns in the pattern library on Welie’s website​[1]​, especially regarding the

- provision of core functionalities, such as searching, navigation etc. Eventually, we decided to make use of

- Bootstrap which provides easy to figure out components to perform these functions.

- As the scope of this assignment frames, we also tried to stay out from platform specific designs at this point.

- We simply tried to create an interactive web user interface that would be available and understandable for our

- target audience with any kind of setup they have. This viewpoint let us make use of JavaScript language to

- handle the interactions of the user interface, as JavaScript is a platform-independent programming language.

- As we have decided the programming languages and frameworks we will make use of during the development

- of responsive user interface, the next step was to re-examine our individual designs and find the optimal

- design via design guidelines. For that part of making sure that our design follows the principles, we relied on

- Nielsen’s Ten Usability Heuristics for User Interface Design​[2]​ as a base.

- Furthermore, we also took our Command Line Interface design as a foundation for the interactions of the

- responsive user interface. That was the document relying on our user requirements and those requirements

- should be covered in all of our designs. Therefore, we tried t make sure that those functionalities

- corresponding to the user requirements are covered.That document itself is also founded on Designing the

- User Interface by Shneiderman and Plaisant​[3]  ​, especially in the creation of Command Line Language.

- Methodology

- As this document aims to represent the developed web user interface and verifies it via design guidelines, it is

- appropriate to have a high-level look at the design in this section.

- The developed responsive user interface design consists of pages corresponding to several grouped

- functionality as the example web pages and design patterns demonstrate and propose.The functionalities are

- based on the ones described in the Command Line Interface Design document of this project.

- During the analysis of the responsive user interface design, the criteria are the ones set by Nielsen.​[2]

- Furthermore, regarding the realization of the design we gathered feedback from real novice users.

- Results and Analysis

- The section involves the representation and description of the developed responsive user interface and its

- verification towards the existing guidelines and Command Line Interface Design.

- Responsive User Interface Design

- First, the user interface with its screenshots and detailed descriptions will be provided.

- The user interface consist of pages of grouped elements and functionalities. Each of these pages and the

- available interactions on them are described below.

- Welcome Page

Figure 1: Welcome Page

- Welcome Page greets the user and provide them in-a-nutshell explanation of what Time Banking is. It also

- gives them the option to either create an account or login to make use of Time Banking Service. The

- necessary information for creating an account is to create a username, a password and providing a phone

- number. By providing this basic personal info and clicking the create button, a first-time user will become a

- member of the Time Banking platform and is directed to the home page of the website. This basic personal info

- is also asked when log in option is selected by clicking on the formatted text. Clicking the Log in text takes the

- user to the Login page.

- Login Page

![X0](images/X0)

Figure 2: Login Page

- The Login welcomes the user back to Time Banking and asks for the basic personal data to grant the right to

- access to the user to the platform. Once the data is provided and Log in button is clicked, the user is directed

- to the Home Page as in the case of creating a new user account.

- Home Page

![X0](images/X0)

Figure 3: Home Page

- The Home Page of web application can be also referred as the Feed actually since the main attraction and the

- aim of this page is to present the active requests going on in Time Banking. The reasoning behind having this

- feed in the home page of the user interface is to encourage the user to offer service to these requests and

- keep Time Banking alive and effective so that every user in need is met with their remedy.

- So, the core functionality on this page is making an offer to the existing listed requests. When an Offer button

- is clicked for a request, a new dialog box appears involving the related info to the soon-to-be-sent offer.

![X0](images/X0)

Figure 4: Sending an Offer

- As it can be seen above, the user willing to make an offer can send the corresponding requester a message

- related to the service they are willing to provide. User sending the offer is also warned that the offer will be sent

- with his/her username and phone number, which is essential for the communication between the user making

- the offer and the requester in the upcoming phases. An offer is then sent if the user clicks the Send button.

- He/she can also cancel the offer sending by clicking the Cancel button or the X (Close) sign on the top right if

- he/she accidentally clicked on Offer button in the first place or decided not to send an offer later. Once an offer

- is sent or cancelled, the home page is shown again to the user.

- Another core functionality of Home Page is, as expected, creating a new request. The user can create a new

- request for a service he/she needs by clicking the new request button. When New Request button is clicked,

- another box will be shown to the user involving necessary actions for a request to be formed. This is shown in

- the figure below.

![X0](images/X0)

Figure 5: Creating a New Request

- For a request to be created, a title explaining the needed service, e.g. Fixing a Leak on the Roof, a category

- that the service belongs to, e.g. Fixing and a time balance that the service worths need to be specified. It

- should be noted here that, as described in the Command Line User Interface Design document, categories are

- actually skills used in performing a service, such as Fixing, Cleaning, Carpentry etc. They are useful in

- searching for particular requests. By clicking Create button, the request with the provided information will be

- created. Otherwise, the user can decide not to perform the action by clicking the Cancel button or clicking on

- the X(Close) sign.

- The home page includes a navigation bar on the top of the page, which all other pages except Welcome and

- Login pages have. This bar basically lets the user change the displayed page out of the provided pages of the

- application. The starting point saying Time Banking acts as a logo basically and takes the user to Home Page.

- Home section takes the user to Home Page as well. The section called My History acts as a dropdown menu.

- When this section is clicked, the options underneath are visible to the user. The current page that is displayed

- to the user is marked darker on the navigation bar. For example, Home section is darker on the navigation bar

- in Figure 3.

Figure 5: Navigation Bar

![X0](images/X0)

![X1](images/X1)

- As the close-up image of the top of the Home Page above shows, My History section has the pages

- underneath called Requests and Offers. Clicking on one of these takes the user to the corresponding page.

- Profile section takes the user to his/her own profile. At the right part of the navigation bar, there is the log out

- option, which when clicked would terminate the current session of the user and take him/her back to the

- Welcome Page.

- Another important element on Home Page is the search bar, which is also visible in the screenshot above. This

- element lets users type in a category of requests and search only the requests in that category, so that they

- are only shown the requests they are interested in offering. When a request is being formed, it is tagged with a

- skill and put into that skill category. Therefore, when a certain category is searched, requests belonging to that

- category will be displayed.

- As all the elements and functionalities belonging to Home Page, is covered, it is time to move on to the other

- pages of the user interface. As mentioned above, My History section consists of two separate pages, Requests

- and Offers pages. When clicked on Requests pages, the following page will be displayed to the user.

- Requests Page

Figure 6: Requests Page

- Requests Page displays the requests belonging to the user and the offers received from other users for

- fulfilling these requests, if there are any. The requests of the user can be active ones, meaning that they are

- not completed and still receiving offers. In figure 6, Fixing the Heater and Fixing a Leak on the Roof requests

![X0](images/X0)

- are tagged as Active, as visible. Then, Fixing the Heater has some offers received. Offers for an Active

- Request, can be Accepted, Pending and Declined. In the case of Fixing the Heater request, the offer from the

- user Mahanya was already Declined, but the offer from the user Liipa is still Pending, as it can be seen from

- the tags. The Pending offers can be selected with their corresponding checkbox and can either be accepted or

- declined, by clicking the corresponding buttons underneath. Once an offer is declined, it its checkbox will be

- disabled, as it is the case for the offer from Mahanya in this case and that action cannot be rollbacked. On the

- other hand, if any of the pending offers is accepted, other offers are automatically declined since only one offer

- can be accepted for a request and the request itself is not active anymore. This means that an offer has been

- accepted and the person with the offer will be notified about it by Time Banking, so the requester and the user

- with the offer has an agreement based on trust from that moment on.

- It is also possible for the user to delete an active request. Though, for inactive requests, in other words,

- request that has already accepted an offer, it is possible for the requester to confirm or complain about the

- offered service. As mentioned in Command Line User Interface Design document, the time balance of a

- request will be granted to the accepted offer in 2 days, since Time Banking is based on the trust to the

- community, that the request was fulfilled. Still, to prevent harms to both users(requester and offerer), this

- confirming and issuing a complaint about the accepted offer is added to the system. If a confirmation happens

- before 2 days passed, the time balance will be granted to the offerer immediately. If the requester complains

- about the service, requester’s right will be preserved and the time balance will not be granted to the offerer.

- So, the Requests page involves all the functionality related to the user’s own requests and their management.

- The page also has the navigation and log out options, just as the Home Page does.

- Offers Page

- If Offers page is selected from the My History section on the navigation bar, the Offers page containing the

- user’s own offers will be displayed. So, the main idea of having these pages under My History section is

- actually grouping them as they are both related to user’s own actions in Time Banking system.

- The Offers page displays the users all sent offers so far, which have not been deleted. These can include

- Accepted, Pending and Declined offers. A user cannot perform any action for a Declined offer, but he/she can

- actually delete an offer before it gets accepted or declined. The idea behind having the Delete option is not to

- encourage the untrustworthy behavior but rather, giving offerers a chance to withdraw their offer if they realize

- they cannot perform it on that particular time and so on. For an accepted offer, offerer is expected to perform

- the service. If a problem occurs, the corresponding requester can complain about that service, as explained in

- Requests page.

- Besides these limited functionality regarding the user’s own offers, Offers Page has the navigation and log out

- operations as well.

Figure 7: Offers Page

- Profile Page

- As clicking the last section of the navigation bar takes the user, Profile page is presented. Profile page acts as

- both the presentation of personal data of the user and a settings section. Rather than having too many

- sections on the navigation bar,  just as Requests and Offers page are grouped under My History section, we

- decided to have the personal data and settings in one page, as both involves very little information and

- functionality.

![X0](images/X0)

![X1](images/X1)

Figure 8: Profile Page

- As shown in figure 8, on the Profile Page, the username, time balance and skills of the user is presented in the

- scope of personal data. Then, in the scope of functionality, we have the so called settings. The user can delete

- or add new skills to their profile by making use of Delete and Add buttons. They can also change their

- username, phone number and password. These changes will be updated once the corresponding Save button

- is clicked.

- These are all the available pages and interactions in the responsive user interface design of Time Banking. It is

- appropriate to examine these with the selected design guideline.

- Verification of the Responsive User Interface Design

- This subsection includes the correspondence of our design to Nielsen’s Ten Usability Heuristics for User

- Interface Design.​[2]

- Visibility of system status

- We deal with keeping user informed about the status by mostly the tags we se of their requests and offers. For

- example, in Requests and Offers pages, the user is informed whether they can delete their request at the

- moment, or confirm an accepted offer and so on. We also try to change the status in a reasonable time for the

- actions as well. For instance, if as in Figure 6, Liipa’s offer for Fixing a Leak on the Roof request is checked

- and Accept button is clicked, all the other offers will be declined automatically and will not displayed to the user

- anymore. The accepted offer will appear as Accepted rather than Pending. The request itself will not be active

- anymore, therefore the Delete option will not be available. Also, the Confirm and Complain options for the

- accepted offer will become available.Below is the display of the Requests page after Liipa’s offer is accepted.

Figure 9: After an offer is accepted

- For the same objective, if the user decides to complain about  Miratase’s accepted offer, the new display of the

- page will be as below.

![X0](images/X0)

![X1](images/X1)

- Match between system and the real world

- We put the emphasis on this aspect in our Command Line Use Interface design. Time Banking system is

- aimed to be a service for users from any technology literacy level. Therefore, the system uses a language that

- is understandable for any type of users by making use of natural language conventions rather than system

- oriented ones. We sticked with our command line language design to ensure this. For example, using button

- keywords as Add, Delete, Create corresponds to this aspect.

- User control and freedom

- We took the accidental selections of options by users into consideration during our design. This prevents

- unwanted actions to be performed, which will be the ska of all users of Time Banking system.Therefore, we

- offer emergency exits for these type of actions. The Cancel buttons and CLose signs of boxes provided for

- Creating new Request and Sending an Offer to the existing request actions are the most visible examples for

- this aspect.Also, letting the user delete a pending offer before it is accepted or declined is a valuable instance

- in this scope.

- Consistency and standards

- As it is the case in our Command Line User Interface design, we stick with same keywords for the same and

- similar cases. We do not want to confuse our users with different keywords. Also the design of separate pages

- are consistent with each other so the users do not need to spare time to adapt them either. In that sense, we

- made use of patterns from Welie’s website.​[1]

- Error prevention

- We tried to keep our design simple, to prevent error-prone situations. For example, while creating a new

- request, the user is directed to choose a category from an extensive existing list rather than putting in a new

- one. This eliminates the situation of same categories appearing in Uppercase/lowercase and with typos.

- Another example here is when sending an offer to a request, we inform user that his/her user name and phone

- number will be displayed to the requester once the offer is sent.

- Recognition rather than recall

- This is the motivation for having the Requests and Offers pages. The user is not solely notifies, but provided

- with all available information regarding their actions in Time Banking system, rather than having to remember

- and search for them. Also, with the usage of the tags and categories, the user have a quite easy time to keep

- track of their actions.

- Flexibility and efficiency of use

- In this scope, we do not make use of accelerators for expert users, since our target community is formed by

- novice users. The whole design is accustomed to novice users and their needs.

- Aesthetic and minimalist design

- Dialog boxes, which appear when creating a new request and sending an offer, contain only the relevant and

- necessary, basic information. We do not want to overwhelm our users with rarely needed information. Further,

- the whole design is minimalistic, since our goal is to serve for novice users. We only display the ultimate

- necessary information and provide relevant interactions to them.

- Help users recognize, diagnose, and recover from errors

- As we tried to design the user interface as error-prone as possible, we did not include error diagnosis and

- recovery so far. Though, we know that it should provide that for the users at least in improved versions of the

- user interface.

- Help and documentation

- As we do not want to overwhelm our users with non-ultimate information, we do not provide documentation to

- them We kept our design simplistic to prevent the need for such documentation needs. Still, the buttons,

- navigation bar etc. provide the user the necessary help.

- Discussion and Conclusions

- We believe that we included the main heuristics of user interface design into our responsive user interface

- design, as explained in detail in the previous section. Further, we tried to gather some objective feedback from

- the novice users we know, e.g. our parents. The key ideas from their feedback included:

- “Easy to use”

- “I know where to click and go”

- “I like the colors, they let me understand what is going on easily”

- “Good, I can cancel that”

- All these feedback let us recognize our design suitable not only according to the guidelines but according to

- our target audience as well. Still, it is for sure that more user testing, especially including people who this

- system is actually built for, needs to be performed to get a better analysis on the capabilities and design of the

- system.

- Related to the complexity and workload of this whole assignment, we thought that very little explanation was

- provided about the extent. Therefore, we could not be sure about the level of the detail in the user interface

- design. We took initiatives in that scope and tried to explain those in this report.

- References

- [1] Welie, M. V. (n.d.). Pattern library. Retrieved December 05, 2016, from http://www.welie.com/patterns

- [2] 10 Heuristics for User Interface Design: Article by Jakob Nielsen. (n.d.). Retrieved December 05, 2016,

- from ​https://www.nngroup.com/articles/ten-usability-heuristics/

- [3] Shneiderman, B. (1998). “Command and Natural Languages”. ​Designing the user interface: Strategies for

- effective human-computer-interaction

(4th ed.). Reading, Mass: Addison Wesley Longman.

