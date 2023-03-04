//declaring create post button and modal window
const createPostBtn = document.querySelector('#create-post-btn');
const modalWindow = document.querySelector('.modal');



//Create post button function
createPostBtn.addEventListener('click', displayModalWindow);

//displays modal window
function displayModalWindow(){
    modalWindow.style.display = 'block';
}
//removes modal window
function removeModalWindow(){
    modalWindow.style.display = 'none';
}

//close button function on the modal window
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', removeModalWindow);




//declaring publish and cancel buttons
const publishPostButton = document.querySelector('#publish-post-btn');
const cancelPostButton = document.querySelector('#cancel-post-btn');


//Cancel button function, warns that the post will be deleted if cancel button is clicked
cancelPostButton.addEventListener('click', function(){
    const ans = confirm('If you cancel, the post will be deleted');
    if(ans){
        removeModalWindow();
    }
   })


//Publishing button function
publishPostButton.addEventListener('click', function(event){
    event.preventDefault();
    //white space of input is removed
    const heading = document.querySelector('#post-heading').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    //Checks if the fields are empty
    if(heading === '' || content === ''){
        alert('Please fill all the fields before posting')
        return;
    }
    
    //Creating new div and adding elements for the blog content
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const postHeading = document.createElement('h3');
    postHeading.textContent = heading;

    const postContent = document.createElement('p');
    postContent.textContent = content;

    const editPostButton = document.createElement('button');
    editPostButton.classList.add('edit');
   
    const deletePostButton = document.createElement('button');
    deletePostButton.classList.add('delete');

    editPostButton.textContent = 'Edit Post';
    deletePostButton.textContent = 'Delete Post'
    //Time stamp
    const now = new Date();
    let timeStamp = `Created At: ${now.toLocaleString()}`;

    const timeStampElement = document.createElement('p');
    timeStampElement.classList.add('time');
    timeStampElement.textContent = timeStamp;
    
    postDiv.appendChild(postHeading);
    postDiv.appendChild(postContent);
    postDiv.appendChild(editPostButton);
    postDiv.appendChild(deletePostButton);
    postDiv.appendChild(timeStampElement);
    //adding elements to the main div
    const postContainer = document.querySelector('#post-container');
    postContainer.appendChild(postDiv);
    document.querySelector('#post-heading').value = '';
    document.querySelector('#post-content').value = '';
    modalWindow.style.display = 'none';

  
    //The edit button captured the previous content and update the content in a new line
    postContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit')) {
          displayModalWindow();
          const postDiv = event.target.closest('.post');
          console.log(postDiv);
          const updatedHeading = postDiv.querySelector('h3');
          const updatedContent = postDiv.querySelector('p');
          
          document.querySelector('#post-heading').value = updatedHeading.textContent;
          document.querySelector('#post-content').value = updatedContent.textContent;
          postDiv.classList.add('remove');
          event.stopPropagation();
           }
      });
      
     //Delete button adds remove class to the current element
      postContainer.addEventListener('click', function(event){
        event.stopPropagation();
        if(event.target.classList.contains('delete')){
            const currentDiv = event.target.closest('.post');
                currentDiv.classList.add('remove');
        }
      });
      
      
    
})

