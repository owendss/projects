print("Welcome to my quiz")
playing=input("Do you want to play? ")
if playing.lower() != "yes":
    quit()
print("Let's play")
score=0

answer=input("What does CPU stand for? ")
if answer.lower() == "central processing unit":
    print("Correct!")
    score += 1
else:
    print("Incorrect")

answer=input("What does RAM stand for? ")
if answer.lower() == "random access memory":
    print("Correct!")
    score += 1
else:
    print("Incorrect")

print("You got "+ str(score) + " question/s correct")