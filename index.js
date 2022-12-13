document.addEventListener("DOMContentLoaded", function () {

    let comments = document.getElementById("comments");
    let addCommentButton = document.getElementById("add");
    let commentInput = document.getElementById("comment");
    let nameInput = document.getElementById("name");
    addCommentButton.disabled = true;

    function gapCheck(button) {
        if (commentInput.value.length > 0 && nameInput.value.length > 0) {
            button.disabled = false;
        }
        else {
            button.disabled = true;

        }


    }


    nameInput.onkeyup = function () {
        gapCheck(addCommentButton)
    };
    commentInput.onkeyup = function () {
        gapCheck(addCommentButton)
    };








    addCommentButton.onclick = () => {


        let comment = document.createElement("li");
        comment.setAttribute("class", "comment");


        let commentText = document.createElement("div");
        commentText.setAttribute("class", "commentText");
        commentText.innerHTML = commentInput.value;
        comment.appendChild(commentText);

        let commentName = document.createElement("div");
        commentName.setAttribute("class", "commentName");
        commentName.innerHTML = nameInput.value;
        comment.appendChild(commentName);





        let timeOfComment = document.createElement("span");
        timeOfComment.setAttribute("class", "time");

        function commentTime() {
            let time = new Date();
            let hour = time.getHours();
            let minute = time.getMinutes();


            if (hour < 10 && minute < 10) {
                return `0${hour}:0${minute}`;
            }
            else if (minute < 10) {
                return `${hour}:0${minute}`;
            }
            else if (hour < 10) {
                return `0${hour}:${minute}`;
            }
            else {
                return `${hour}:${minute}`;
            }
        }

        timeOfComment.innerHTML = commentTime();




        let likeButton = document.createElement("img");
        likeButton.setAttribute("src", "./upvote.png");
        comment.appendChild(likeButton);



        let likeCount = document.createElement("span");
        likeCount.setAttribute("class", "likeCount");


        likeCount.innerHTML = `${randomLikeNumber()}`;
        comment.appendChild(likeCount);

        function randomLikeNumber() {
            return Math.floor(Math.random() * 100);
        }
        var liked = false;
        likeButton.onclick = () => {
            if (liked) {
                let likeNumber = likeCount.innerHTML;
                let newLikeNumber = parseInt(likeNumber, 10) - 1;
                likeCount.innerHTML = newLikeNumber;
                liked = false;
            }
            else {
                let likeNumber = likeCount.innerHTML;
                let newLikeNumber = parseInt(likeNumber, 10) + 1;
                likeCount.innerHTML = newLikeNumber;
                liked = true;
            }

        };


        let replyButton = document.createElement("button");
        replyButton.setAttribute("class", "replyButton");
        replyButton.innerHTML = "Reply";
        comment.appendChild(replyButton);


        comment.appendChild(timeOfComment);
        comments.appendChild(comment);
        nameInput.value = "";
        commentInput.value = "";
        addCommentButton.disabled = true;
        replyButton.disabled = true;

        nameInput.onkeyup = function () {
            gapCheck(addCommentButton)
            gapCheck(replyButton)
            gapCheck(secondReplyButton)
        };
        commentInput.onkeyup = function () {
            gapCheck(addCommentButton)
            gapCheck(replyButton)
            gapCheck(secondReplyButton)
        };


        replyButton.onclick = () => {
            let allRepliedComments = document.createElement("ul");
            let repliedComment = document.createElement("li");
            repliedComment.setAttribute("class", "repliedComment");


            let replyCommentInput = document.getElementById("comment").value;
            let replyNameInput = document.getElementById("name").value;




            let replyName = document.createElement("div");
            replyName.setAttribute("class", "replyName");
            let replyComment = document.createElement("div");
            replyComment.setAttribute("class", "replyComment");


            replyName.innerHTML = replyNameInput;
            replyComment.innerHTML = replyCommentInput;

            repliedComment.appendChild(replyName);
            repliedComment.appendChild(replyComment);

            let replyLikeButton = document.createElement("img");
            replyLikeButton.setAttribute("src", "./upvote.png");
            repliedComment.appendChild(replyLikeButton);
            let replyLiked = false;
            replyLikeButton.onclick = () => {
                if (replyLiked) {
                    let likeNumber = replyLikeCount.innerHTML;
                    let newLikeNumber = parseInt(likeNumber, 10) - 1;
                    replyLikeCount.innerHTML = newLikeNumber;
                    replyLiked = false;
                }
                else {
                    let likeNumber = replyLikeCount.innerHTML;
                    let newLikeNumber = parseInt(likeNumber, 10) + 1;
                    replyLikeCount.innerHTML = newLikeNumber;
                    replyLiked = true;
                }

            };

            let replyLikeCount = document.createElement("span");
            replyLikeCount.setAttribute("class", "likeCount");
            replyLikeCount.innerHTML = randomLikeNumber();
            repliedComment.appendChild(replyLikeCount);

            let timeOfReplyComment = document.createElement("span");
            timeOfReplyComment.setAttribute("class", "time");
            timeOfReplyComment.innerHTML = commentTime();
            repliedComment.appendChild(timeOfReplyComment);

            let secondReplyButton = document.createElement("button");
            secondReplyButton.setAttribute("class", "replyButton");
            secondReplyButton.innerHTML = "Reply"
            repliedComment.appendChild(secondReplyButton);


            allRepliedComments.appendChild(repliedComment);
            comment.appendChild(allRepliedComments);

            nameInput.onkeyup = function () {
                gapCheck(addCommentButton)
                gapCheck(replyButton)
                gapCheck(secondReplyButton)
            };
            commentInput.onkeyup = function () {
                gapCheck(addCommentButton)
                gapCheck(replyButton)
                gapCheck(secondReplyButton)
            };
            secondReplyButton.onclick = () => {



                let secondRepliedComments = document.createElement("ul");
                let secondRepliedComment = document.createElement("li");
                secondRepliedComment.setAttribute("class", "repliedComment");


                let secondReplyCommentInput = document.getElementById("comment").value;
                let secondReplyNameInput = document.getElementById("name").value;




                let secondReplyName = document.createElement("div");
                secondReplyName.setAttribute("class", "replyName");
                let secondReplyComment = document.createElement("div");
                secondReplyComment.setAttribute("class", "replyComment");
                secondReplyName.innerHTML = secondReplyNameInput;
                secondReplyComment.innerHTML = secondReplyCommentInput;

                secondRepliedComment.appendChild(secondReplyName);
                secondRepliedComment.appendChild(secondReplyComment);

                let secondReplyLikeButton = document.createElement("img");
                secondReplyLikeButton.setAttribute("src", "./upvote.png");
                secondRepliedComment.appendChild(secondReplyLikeButton);

                let timeOfSecondReplyComment = document.createElement("span");
                timeOfSecondReplyComment.setAttribute("class", "time");
                timeOfSecondReplyComment.innerHTML = commentTime();
                secondRepliedComment.appendChild(timeOfSecondReplyComment);




                let secondReplyLiked = false;

                secondReplyLikeButton.onclick = () => {
                    if (secondReplyLiked) {
                        let likeNumber = secondReplyLikeCount.innerHTML;
                        let newLikeNumber = parseInt(likeNumber, 10) - 1;
                        secondReplyLikeCount.innerHTML = newLikeNumber;
                        secondReplyLiked = false;
                    }
                    else {
                        let likeNumber = secondReplyLikeCount.innerHTML;
                        let newLikeNumber = parseInt(likeNumber, 10) + 1;
                        secondReplyLikeCount.innerHTML = newLikeNumber;
                        secondReplyLiked = true;
                    }

                };

                let secondReplyLikeCount = document.createElement("span");
                secondReplyLikeCount.setAttribute("class", "likeCount");
                secondReplyLikeCount.innerHTML = randomLikeNumber();
                secondRepliedComment.appendChild(secondReplyLikeCount);


                secondRepliedComments.appendChild(secondRepliedComment);
                repliedComment.appendChild(secondRepliedComments);

                nameInput.onkeyup = function () {
                    gapCheck(addCommentButton)
                    gapCheck(replyButton)
                    gapCheck(secondReplyButton)
                };
                commentInput.onkeyup = function () {
                    gapCheck(addCommentButton)
                    gapCheck(replyButton)
                    gapCheck(secondReplyButton)
                };
                nameInput.value = "";
                commentInput.value = "";
                addCommentButton.disabled = true;
                replyButton.disabled = true;

                secondReplyButton.disabled = true;
            }



            nameInput.value = "";
            commentInput.value = "";
            addCommentButton.disabled = true;
            replyButton.disabled = true;
            secondReplyButton.disabled = true;


        }



        addCommentButton.disabled = true;
            replyButton.disabled = true;
            secondReplyButton.disabled = true;
        nameInput.value = "";
        commentInput.value = "";

    }

    replyButton.disabled = true;
    secondReplyButton.disabled = true;
    nameInput.value = "";
    commentInput.value = "";




























})
