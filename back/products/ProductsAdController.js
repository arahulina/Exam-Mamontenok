const productsModel = require('./ProductsAdModel')

/**
 * Создание нового объявления
 * Могут только зарегистрированные пользователи
 * @param request
 * @param response
 * @returns {*}
 */
exports.create = function (request, response){
    // Если пользователь не авторизован - нет ключа
    if(!request.user) {
        return response.status(401).json({message: "Вы не вошли в систему"})
    }

    let bodyProduct = request.body
    bodyProduct.author_id = request.user._id // Фиксируем пользователя (автора объявления)
    bodyProduct.created_at = Date.now()

    // TODO: потом тут получать картинки

    let newProduct = new productsModel (bodyProduct)

    console.log(newProduct)

    // Сохранили запись в базе данных
    newProduct.save(function(err){
        if(err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        }
        else { // Если все хорошо - вернуть новое объявление
            return response.status(201).json(newProduct);
        }
    });

}


/**
 * Вернуть всe объявления
 * Read (All) === GET
 * @param request
 * @param response
 */
exports.index = async function (request, response) {
    console.log("Пришел за всеми товарами")

    // Данные для постраничного вывода объявлений

    // Количество объявлений на страницу
    let per_page = 3;
    if (request.query.per_page !== undefined) per_page = request.query.per_page

    // Текущая страница
    let page = 1;
    if (request.query.page !== undefined) page = request.query.page

    console.log("Элементов на страницу: " + per_page)
    console.log("Текущая страница: " + page)

    let total = await productsModel.count();
    let allProducts = await productsModel.find({}).sort('created_at').skip((per_page*(page - 1))).limit(per_page);
    let send = {
        total: total, // Сколько всего в коллекции
        page: page, // Какая сейчас страница открыта
        per_page: per_page, // Сколько элементов на страницу
        data: allProducts // Сами элементы данной страницы
    }
    console.log(send)
    return response.status(200).json(send);
}


/**
 * Вернуть конкретное объявление
 * Read (One) === GET
 * @param request
 * @param response
 */
exports.show = function (request, response) {
    // console.log(request.params.studentId)
    let findId = request.params.product_id

    productsModel.findById(findId, function(err, card){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(card);
        }
    });
}



exports.update = function (request, response) {
    if(!request.user) {
        return response.status(401).json({message: "Вы не вошли в систему"})
    }

    productsModel.findById(findId, function(err, product){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            if (product.author_id.toString() !== request.user._id ) {
                return response.status(403).json({message: "У вас нет прав обновить товар"})
            }

            // ДЗ - Написать обновление записи

            return response.status(204).send("Success!");
        }
    });
}


exports.delete = function (request, response) {
    console.log("start del")
    // Если пользователь не авторизован - нет ключа
    if(!request.user) {
        return response.status(401).json({message: "Вы не вошли в систему"})
    }

    let findId = request.params.product_id

    // Ищу запись в базе данных
    productsModel.findById(findId, function(err, product){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            if (product.author_id.toString() !== request.user._id ) {
                return response.status(403).json({message: "У вас нет прав удалить товар"})
            }

            productsModel.findByIdAndDelete(findId , function (err) {
                if(err) {
                    console.log(err);
                    return response.status(422).json(err);
                }

                return response.status(204).send("Success!");
            })

        }
    });

    // Найти то что нужно удалить
    // Сравнить автора и того, кто пришел - и удалять только тогда - когда автор совпадает


}