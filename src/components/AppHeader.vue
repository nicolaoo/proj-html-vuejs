<script>
export default {
  data() {
    return {

    }
  }
}

</script>

<template>
  <header>
    <div class="container">
      <div class="head">
        <div class="logo">
          <figure>
            <img src="/land/img/logo-dark.png" alt="">
          </figure>
        </div>
        <div class="list-head">
          <ul>
            <li>Home</li>
            <li class="active">
              Landing
              <span>
                <i class="fa-solid fa-chevron-down"></i>
              </span>
            </li>
            <li>
              Pagies
              <span>
                <i class="fa-solid fa-chevron-down"></i>
              </span>
            </li>
            <li>
              Docs
              <span>
                <i class="fa-solid fa-chevron-down"></i>
              </span>
            </li>
          </ul>
        </div>
        <div class="search-bar">
          <span>

            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <button><i class="icon-head fa-brands fa-github"></i></button>
          <button><i class="icon-head fa-solid fa-chart-gantt"></i></button>
          <button><i class="icon-head fa-regular fa-user"></i></button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

header {
  background-color: $sfondo-bg;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  .logo {
    flex-basis: 10%;
  }

  .list-head {
    flex-direction: row;

    ul {
      display: flex;
      gap: 20px;
      align-items: center;
      text-transform: uppercase;
      font-size: 12px;
      color: grey;
      font-weight: 800;

      span {
        font-size: 8px;
      }

      .active {
        color: $text-bg-purple;
      }
    }
  }

  .fa-magnifying-glass {
    color: $text-grey;
    margin: 0px 10px;

  }

  button {
    border-radius: 8px;
    padding: 10px;
    margin: 0px 5px;
    background-color: $bg-icon-head;
    color: $text-bg-purple;
  }




}
</style>
