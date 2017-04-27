<template>
  <div id="PasswordGenertaion">
    <h1>密码生成工具</h1>

    <el-form>
      <el-form-item label="用户名">
        <el-input v-on:change="countCode()" v-model="pg.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="站点">
        <el-input v-on:change="countCode()" v-model="pg.site" placeholder="站点"></el-input>
      </el-form-item>
      <el-form-item >

        <el-slider
          v-model="pg.len"
          :step="1"
          show-stops
          show-input
          :min="8"
          :max="16"
          v-on:change="countCode()"
        >
        </el-slider>
      </el-form-item>
    </el-form>

    <h1>{{pg.password}}</h1>
  </div>
</template>

<script>
  import md5 from 'blueimp-md5'
  export default {
    name: 'hello',
    data () {
      return {
        pg:{
            password:undefined,
            site:undefined,
            username:undefined,
          len:10
        }
      }
    },
    methods: {
      countCode : function(){
          console.log(this.pg)
        var md5one = md5('123456',this.pg.username);
        var md5two = md5(md5one,this.pg.site);
        var md5three = md5(md5one,'pandapg');
        var rule = md5three.split("");
        var source = md5two.split("");
        for(var i=0;i<=31;i++){
          if(isNaN(source[i])){
            var str ="qwertyuiop789";
            if(str.search(rule[i]) > -1){
              source[i] = source[i].toUpperCase();
            }
          }
        }
        var code32 = source.join("");
        var code1 = code32.slice(0,1);
        var code8;
        if(isNaN(code1)){
          code8 = code32.slice(0,this.pg.len);
        }else{
          code8 = "N" + code32.slice(1,this.pg.len);
        }
        this.pg.password=code8
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
