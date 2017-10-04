<template>
  <div>
    <div v-for="item in materi.data">
      <v-card>
        <v-card-media src="https://ninjaforms.com/wp-content/uploads/edd/2012/10/front-end-posting.png" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{item.title}}</h3>
            <div>{{item.content}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outline class="indigo--text">Baca selanjutnya <v-icon right class="indigo--text">launch</v-icon></v-btn>
        </v-card-actions>
      </v-card>
      <br>
    </div>
    <!--<div class="text-xs-center">-->
      <!--<v-pagination :callback="loadData" :length="pagination.length" v-model="pagination.page" circle></v-pagination>-->
    <!--</div>-->
    <pagination :data="materi" @pagination-change-page="getResults"></pagination>
  </div>
</template>
<script>
  import axios from 'axios'
  import pagination from 'laravel-vue-pagination'
  const api = 'http://bk-api.dev/api/materi'
  export default {
    components: {pagination},
    data () {
      return {
        materi: {}
      }
    },
    created () {
      this.getResults()
    },
    methods: {
      getResults (page) {
        if (typeof page === 'undefined') {
          page = 1
        }

        axios.get(api + '?page=' + page)
          .then(response => {
            this.materi = response.data
          })
      }
    }
  }
</script>
<style>
  /* pagination */

  .pagination {
    height: 36px;
    margin: 18px 0;
    color: #6c58bF;
  }

  .pagination ul {
    display: inline-block;
    *display: inline;
    /* IE7 inline-block hack */
    *zoom: 1;
    margin-left: 0;
    color: #ffffff;
    margin-bottom: 0;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .pagination li {
    display: inline;
    color: #6c58bF;
  }

  .pagination a {
    float: left;
    padding: 0 14px;
    line-height: 34px;
    color: #6c58bF;
    text-decoration: none;
    border: 1px solid #ddd;
    border-left-width: 0;
  }

  .pagination a:hover,
  .pagination .active a {
    background-color: #6c58bF;
    color: #ffffff;
  }

  .pagination a:focus {
    background-color: #6c58bF;
    color: #ffffff;
  }


  .pagination .active a {
    color: #ffffff;
    cursor: default;
  }

  .pagination .disabled span,
  .pagination .disabled a,
  .pagination .disabled a:hover {
    color: #999999;
    background-color: transparent;
    cursor: default;
  }

  .pagination li:first-child a {
    border-left-width: 1px;
    -webkit-border-radius: 3px 0 0 3px;
    -moz-border-radius: 3px 0 0 3px;
    border-radius: 3px 0 0 3px;
  }

  .pagination li:last-child a {
    -webkit-border-radius: 0 3px 3px 0;
    -moz-border-radius: 0 3px 3px 0;
    border-radius: 0 3px 3px 0;
  }

  .pagination-centered {
    text-align: center;
  }

  .pagination-right {
    text-align: right;
  }

  .pager {
    margin-left: 0;
    margin-bottom: 18px;
    list-style: none;
    text-align: center;
    color: #6c58bF;
    *zoom: 1;
  }

  .pager:before,
  .pager:after {
    display: table;
    content: "";
  }

  .pager:after {
    clear: both;
  }

  .pager li {
    display: inline;
    color: #6c58bF;
  }

  .pager a {
    display: inline-block;
    padding: 5px 14px;
    color: #6c58bF;
    background-color: #fff;
    border: 1px solid #ddd;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
  }

  .pager a:hover {
    text-decoration: none;
    background-color: #f5f5f5;
  }

  .pager .next a {
    float: right;
  }

  .pager .previous a {
    float: left;
  }

  .pager .disabled a,
  .pager .disabled a:hover {
    color: #999999;
  }


  /* end */
</style>
