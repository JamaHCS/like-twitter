const $like = document.getElementById('like')

$like.addEventListener('click',(event) => {
  console.log($like.classList);
  $like.classList.toggle('animate');
  // if($like.classList.value = 'like')
  // {
  // }
  // else($like.classList.value = 'like animate')
  // {
  //   $like.classList.remove('animate');
  // }
});
