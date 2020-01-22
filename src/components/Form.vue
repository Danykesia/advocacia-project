<template>
  <div class="form-wrapper container">
    <form action="">
      <div class="name">
        <div class="col-1">
          <label for="name">Name:</label>
        </div>
        <div class="col-2">
          <input type="text" id="fname" name="firstname" placeholder="Your name...">
        </div>
      </div>

      <div class="subject">
        <div class="col-1">
          <label for="subject">Subject:</label>
        </div>
        <div class="col-2">
          <textarea name="subject" id="subject" placeholder="Write something..."
            style="heigth: 400px;">
          </textarea>
        </div>
      </div>

      <div class="button">
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  background: black;
  margin-top: 1rem;
}

.name {
  display: flex;
  justify-content: space-between;
}

.col-2 {
  width: 80%;
}

.subject {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

form {
  margin-top: 3rem;
}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  background:rgb(236, 236, 236);
  border: 3px solid transparent;
  outline: none;

  &:focus {
    background: #fafafa;
    border: 3px solid #ddb16e;
  }
}

label {
  padding: 8px 0;
  display: inline-block;
  color: rgb(194, 194, 194);
}

textarea{
  height: 150px;
}

button {
  color: #fff;
  background: #ddb16e;
  border: 1px solid transparent;
  border-radius: 0 3px 3px 0;
  padding: 12px 20px;
  border: nome;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 3rem;

  &:hover {
    background: #be8e45;
  }
}

.button {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

        @media (min-width: 768px) {
          .container {
            padding-right: 0;
          }
        }
</style>
