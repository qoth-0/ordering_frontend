<template>
    <div class="container">
        <div class="page-header text-center" style="margin-top: 20px"><h1>아이템 목록</h1></div>
        <table class="table">
            <thead>
                <th>#</th>
                <th>아이템명</th>
                <th>카테고리</th>
                <th>가격</th>
                <th>잔여수량</th>
            </thead>
            <tbody>
                <tr v-for="item in itemList" :key="item.id"> 
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.category}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.stockQuantity}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return{
            itemList: [],
        }
        
    },
    async created() {
        try {
            const token = localStorage.getItem('token');
            const headers = {Authorization: `Bearer ${token}`} 
            const response = await axios.get("http://localhost:8080/items", {headers});
            this.itemList = response.data;
        }catch(error) {
            console.log(error);
        }
        
    }
}
</script>
