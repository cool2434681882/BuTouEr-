import Advert from '../models/advert'

export function showAdvertList(req,res,next){
    // Advert.find((err,adverts)=>{
    //     if(err) return next(err)
    //     res.render('advert_list.html',{ adverts })
    // })

    //页码手动配置
    // const page = Number.parseInt(req.query.page)
    // const pageSize = 5
    // Advert
    //     .find()
    //     .skip((page - 1) * pageSize)
    //     .limit(pageSize)
    //     .exec((err,adverts)=>{
    //         if(err) next(err)
    //             // 获取总条数 
    //         Advert.count((err,count)=>{
    //             if(err) next(err)
    //             //技术总页码条数
    //             const totalPage = Math.ceil(count / pageSize) //向上取整
    //             res.render('advert_list.html',{ adverts,totalPage,page })
    //         })
    //     })
    // 客户端
    // <!-- 分页 -->
    //     <ul class="pagination pull-right">
    //         <li><a href="/advert?page={{ page - 1 }}">上一页</a></li>
    //         {% for item in range(0,totalPage) %}
    //         {% if((item + 1) === page) %}
    //         <li class="active"><a href="/advert?page={{ item + 1 }}">{{ item + 1 }}</a></li>
    //         {% else %}
    //         <li><a href="/advert?page={{ item + 1 }}">{{ item + 1 }}</a></li>
    //         {% endif %}
    //         {%- endfor %}
    //         <li><a href="/advert?page={{ page + 1 }}">下一页</a></li>
    //     </ul>
    
    //异步无刷新分页
    res.render('advert_list.html')

}

export function showAdvertAdd(req,res,next){
    res.render('advert_add.html')
}
