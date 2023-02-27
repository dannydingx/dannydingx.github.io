# EECS445 Project1 - Writeup

Danny Ding


### 2 - Dataset Considerations

1. (9 pts) Answer the following questions about the dataset we provided. If you make any assumptions about the source of the data, please state them in your answer.
   
	1. Is it possible to identify individuals (i.e., one or more natural persons), either directly or indirectly
	      (i.e., in combination with other data) from the dataset?     
	       It would be very hard to do so since all names in the dataset were removed and all data were recorded in random order so it wouldn't be possible to find a connection between data. 
	
	2. What tasks could the dataset be used for?
	
	      Could be used to predict emotion from an original text.
	
	3. Are there tasks for which the dataset should not be used?
		 It might not be able to predict the emotion of texts from the "Created-utc" timestamp since it didn't make much sense regarding the correlation between emotion and the time when that text was posted. This task was also undoable for humans.
	
2. (2 pts) Supervised learning, as we have seen, requires a labeled training dataset. One way to obtain labels is through crowdsourcing: effectively having human beings provide labels for each data point. This could lead to errors in the training data itself; in fact, recent work has demonstrated that many commonly used datasets suffer from this issue. Answer the following questions.
   
     1. What is one potential source of inaccuracy in the labels in these datasets?
       
        The emotion was labeled by humans, and some comment texts are hard to distinguish emotions. For example, one sarcastic comment might seem grateful at first look but indeed reflects sadness.
     2. How could inaccurate labels harm our ability to construct an effective model?
        
        Inaccurate labels might create outliers which could affect our SVM model in the wrong direction if that label happens to be a support vector. Those data were not reflecting authentical classification features so will affect our model's generalizability when predicting real-life data.

### 				

### 3 - Feature Extraction

1. ​	**['it', 's', 'a', 'test', 'sentence', 'does', 'it', 'look', 'correct']**

2. ​    **4855**

3. ​    Avg number of nonzero features: **12.241140215716486**

   ​     The word appearing in the greatest number of comments: **i**



### 4 - Hyperparameter and Model Selection

#### 4.1

1.  So that our model could learn on a balanced dataset and would learn all kinds of features evenly so that it will be more generalizable.

2. | Performance Measures | C    | CV Performance     |
   | -------------------- | ---- | ------------------ |
   | Accuracy             | 1    | 0.9214184081814139 |
   | f1-score             | 1    | 0.920263856119252  |
   | AUROC                | 0.1  | 0.973744122821046  |
   | Precision            | 0.01 | 0.998              |
   | Sensitivity          | 1    | 0.9067716067716068 |
   | Specificity          | 0.01 | 0.9984615384615385 |

   Large C made it harder to violate some restrictions when fitting a model, and small C made it easier. So C values could make the model's prediction more generalizable especially when the data were not linearly separable. If it is for me, I would like to choose to optimize C to 1 since we had 3 metrics at their maximum level when C was set to 1, and that seems to be a good value for the hyperparameter. I would pick f1-score to be my metrics since it is comprehensive that it were calculated from many other metrics.

3. | Performance Measures | CV Performance     |
   | -------------------- | ------------------ |
   | Accuracy             | 0.9198767334360555 |
   | f1-score             | 0.9204892966360856 |
   | AUROC                | 0.9734686609686609 |
   | Precision            | 0.9148936170212766 |
   | Sensitivity          | 0.9261538461538461 |
   | Specificity          | 0.9135802469135802 |

4. ![Norm-l2_penalty](D:\0.Danny\2.99 - UMich\2023A - Winter\EECS 445\Project\Project 1\p1_starter_code\Norm-l2_penalty.png)

5.  Most POSITIVE 5 words:

   > coeff: 2.006393 word: thanks
   >
   > coeff: 1.846348 word: thank
   >
   > coeff: 1.441752 word: welcome
   >
   > coeff: 1.161609 word: glad
   >
   > coeff: 1.029449 word: congrats

   Most NEGATIVE 5 words:

   > coeff: -0.468676 word: sad
   > coeff: -0.345201 word: disappointing
   > coeff: -0.335861 word: miss
   > coeff: -0.325155 word: missed
   > coeff: -0.313189 word: sorry

6. Thanks god, glad I am still alive, congrats to myself still working on the EECS project the day before the due.

#### 4.2

1. C-value: **0.1** Mean CV-AUROC Score: **0.9678026490141874** Score on Test Case: **0.9731125356125355**

2. ![Norm-l1_penalty](D:\0.Danny\2.99 - UMich\2023A - Winter\EECS 445\Project\Project 1\p1_starter_code\Norm-l1_penalty.png)

3. The norm of theta generated from l1 penalty is smaller than that from l2 penalty this is due to L1 penalty tend to leads to sparse model since it  encourages the absolute value of \theta_i to go to 0.

   Also we can see that as C grows, the Norm of theta changes differently for L1 and L2 norms. 

4. Square Loss will give more penalty to outliers misclassified data very far from the decision boundary with very negative 
   $$
   y^{(i)}(\overline{\theta}\cdot\overline{x}^{(i)} + b)
   $$
   value. Such that using square hinge loss will treat those far outliers more seriously and gave a more compromised decision boundary.

#### 4.3

1. | Tuning Scheme | C                 | r                 | AUROC    |
   | ------------- | ----------------- | ----------------- | -------- |
   | Grid Search   | 1                 | 100               | 0.976997 |
   | Random Search | 20.63796606099088 | 6.872853080796028 | 0.978359 |

2. The C and r from Both schemes don't vary much from each other from the exponential level. They are all in the (1-100) range and gave similar performances on the test dataset. Both strategies can be used to find hyperparameters, with some pro and cons:

   1. Grid Search: Promised to cover standard combination with the strictly exponentially uniformly distributed choice of hyperparameter. But somehow take more times.
   2. Exponentially Uniform distributed Random Search: An approximate uniform distribution. It might find better results than the grid search since it covers all values, not just exponents of 10.  But also might be uneven if the randomization isn't lucky that some good combinations of parameters were not approached by the random number generator.

    


#### 4.4

1. $$
   \phi(\bar{u})=[u_1^2 , u_2^2,\dots , u_n^2, \sqrt{2}u_1u_2\dots u_n, r, \sqrt{2r}u_1, \sqrt{2r}u_2,\dots\sqrt{2r}u_n] \\
   \phi(\bar{u}) \cdot  \phi(\bar{v}) = u_1^2 v_1^2 + u_2^2 v_2^2 + \dots + u_n^2v_n^2  + 2u_1v_1u_2v_2\dots u_nv_n + r^2 + 2ru_1v_1 + 2ru_2v_2 \dots + 2ru_nv_n  = (\bar{u} \cdot \bar{v} + r)^2 = K(\bar{u},\bar{v})
   $$

   

2. There will be more calculation and memory usage if we do feature mapping explicitly. On the other hand, not all feature maps can be represented by some kernels, so feature maps explicitly can be more adaptive. But usually, kernel trick is always an efficient technique to use.

### 5 - Asymmetric Cost Functions and Class Imbalance

#### 5.1

1.  This modification allows our model to have different penalty weights when misclassifying False Positive and False Negative data.  If  W_n is much greater than W_p, our model will feel freer when misclassifying positive data (more False Negative) due to less penalty coefficient, but will be less lenient for misclassifying negative (less False Positive).

2. The difference will be the same as multiplying C by 4, reflected in the SVM formula. In our previous work, we showed that a larger C results in a "harder" margin.

3. | Performance Measure | Performance         |
   | ------------------- | ------------------- |
   | Accuracy            | 0.6178736517719569  |
   | f1-score            | 0.7222844344904815  |
   | AUROC               | 0.962789648622982   |
   | Precision           | 0.5677816901408451  |
   | Sensitivity         | 0.9923076923076923  |
   | Specificity         | 0.24228395061728394 |

4. Specificity is affected most. Note that Specificity is calculated by:
   $$
   \frac{TN}{TN+FP}
   $$
   and the class weight here increased the False Positive by letting the penalty of False Negative 10 times greater.

#### 5.2

1. | Class Weight  | Performance Measures | Performance          |
   | ------------- | -------------------- | -------------------- |
   | Wn = 1,Wp = 1 | Accuracy             | 0.8007380073800738   |
   | Wn = 1,Wp = 1 | f1-score             | 0.8891928864569083   |
   | Wn = 1,Wp = 1 | AUROC                | 0.9511467673430862   |
   | Wn = 1,Wp = 1 | Precision            | 0.8004926108374384   |
   | Wn = 1,Wp = 1 | Sensitivity          | 1.0                  |
   | Wn = 1,Wp = 1 | Specificity          | 0.006134969325153374 |

2. Specificity is affected most and Auroc is affected least. Since we put both Weights to 1, the model here is not very different from what we made in part 4, but the difference is that our dataset was not balanced, and there are more positive data points in the dataset. Such that the slack for positive data points weighted more in the optimization problem in this example.  Specificity measured how the model performed on negatively labeled data points, and here we see that it did badly since it paid more attention to positive labeled ones.

3. Somehow yes. F-1 Score depends on precision and sensitivity and gives a compromised average of those two values. It is intuitively understandable that sensitivity is perfect here since sensitivity measures the model's performance on positively labeled data points which is dominant in this unbalanced dataset. But the precision wasn't perfect since there are some amount of False Positive here due to more positive data. F-1 score so gives a moderate measure of this model's performance.

#### 5.3

1. In this case, I would choose to use metrics 'accuracy' as it reflects an evaluation of the model performance that considered all four kinds of label prediction status, which is more comprehensive under this condition of an unbalanced database. To choose weight parameters, I did a grid search by 2's exponential [1, 2, 4, 8, 16, 32] such that the multiples relationship between data of different label could be embodied. Note that in this example, I fixed C=0.01 during grid search while different combinations of Weight could have an effect similar to "vary c a little bit." (e.g. (1,2)and(2,4)) eventually, I find the parameter (16,8) to be the best.

2. | Class Weight   | Performance Measures | Performance        |
   | -------------- | -------------------- | ------------------ |
   | Wn = 16,Wp = 8 | Accuracy             | 0.8733087330873309 |
   | Wn = 16,Wp = 8 | f1-score             | 0.9146644573322287 |
   | Wn = 16,Wp = 8 | AUROC                | 0.9471071260028314 |
   | Wn = 16,Wp = 8 | Precision            | 0.9910233393177738 |
   | Wn = 16,Wp = 8 | Sensitivity          | 0.8492307692307692 |
   | Wn = 16,Wp = 8 | Specificity          | 0.9693251533742331 |
   
3. ![image-20230204194537008](C:\Users\MI\AppData\Roaming\Typora\typora-user-images\image-20230204194537008.png)

### 6 - Challenge



#### Feature Engineering

I read the appendix C and adopted the TF-IDF score - which takes the occurrence of words in text into consideration such that would give a more dependable feature than simply one-hot encoding.  To implement it I used the tfdif fitter from sklearn: `sklearn.feature_extraction.text.TfidfVectorizer`

```python
tfdif_model = sklearn.feature_extraction.text.TfidfVectorizer()
feature_matrix = (tfdif_model.fit_transform(df.text).toarray())
```

For Kernel, hyperparameter, and model selection. My first thought is to use a linear kernel and one-vs-all(one-vs-rest) model. Since linear did well in the previous classification in this project I thought there isn't much meaning to use quadratic given that numbers in the dataset are all "normalized" through tf-idf.  Also, I read some documents about one-vs-one and one-vs-rest, they are all multiclass classifiers based on multiple basic classifiers. In our example, while there are only 3 labels (classes), both one-vs-one and one-vs-rest will use 3 models. This is not the case when there are many labels, in such case we need to create NC2 one-vs-one model.  Therefore, since we will use same amount of models here, I'd rather pick one-vs-rest which all data than one-vs-one which just use 2/3 of the data for each model.  The issue with it is that data are imbalanced. 

Before I tried out the model, I did a pilot using `sklearn.model_selection.GridSearchCV` to check my guessing about the model. I tried different combinations of parameters:

```python
param_grid = [
  {'C': [0.01,0.1,1, 10, 100, 1000],  'kernel': ['linear','rbf'], 'decision_function_shape':['ovr'], 'break_ties':['True']},
    {'C': [0.01,0.1,1, 10, 100, 1000], 'kernel': ['linear','rbf'], 'decision_function_shape':['ovo']}
]
clf = sklearn.svm.SVC()
gc_clf = sklearn.model_selection.GridSearchCV(clf,param_grid,cv=5,verbose=3)
gc_clf.fit(X_train,Y_train)
```

And I found some good results using rbf kernel and ovr decision function. Afterwards, I wrote the accuracy metrics for this three label cases and altered the `cv_performance()` a little bit to find the value c for LinearSVC and I found that to perform even better than rbf kernel.

```python
def cv_performance_mult(clf, X, y, k=5, metric="accuracy"):

    skf = sklearn.model_selection.StratifiedKFold(n_splits=k);
    # Put the performance of the model on each fold in the scores array
    scores = []

    for train_i,test_i in skf.split(X,y):
        X_s_train, X_s_test = X[train_i], X[test_i]
        y_s_train, y_s_test = y[train_i], y[test_i]
        clf.fit(X_s_train, y_s_train);

     
        y_test_predict = clf.predict(X_s_test)
        cfs_mtx = sklearn.metrics.confusion_matrix(y_s_test, y_test_predict);
        accuracy = (cfs_mtx[0][0] + cfs_mtx[1][1] + cfs_mtx[2][2]) / y_test_predict.size #Is the accuracy score that we will be tested on
        scores.append(accuracy)

    return np.array(scores).mean()
```

After several tries, I found my model worked pretty well when doing l1-penalty  with a cv-performance score of  *.72* and therefore, I realized that l1-penalty would lead to sparse theta parameter and that since many not useful weight were set to 0, I could use that to remove such feature and further improve my dataset. (*This is described as "Using only a subset of the raw features" from the document under "Try different Feature Engineering method"*)

The way I implemented it is by fitting an l1-penalty model that I've gained through `select_param()` first and extracting it's three theta vectors, and I extract all columns index for which any of those three vectors were not zero. Then I create a smaller feature matrix. At the end of the day, I decreased the number of features from 4661 to 803, which would certainly lead to improvement in model performance.

```python
clf_l1 = sklearn.svm.LinearSVC(C=1, penalty="l1", dual=False, loss="squared_hinge",  multi_class="ovr")
clf_l1.fit(X_train,Y_train)
idx_useful = np.logical_or(np.logical_or(clf_l1.coef_[0]>0, clf_l1.coef_[1]>0),clf_l1.coef_[2]>0)
X_Useful = X_train[:,idx_useful]
```

Also, I needs to store this `idx_useful` since I would still need it for prediction.

After this process, I run the GridCV again but on the new smaller feature matrix. This time I reached the accuracy **0.8** at:

> {'C': 10,
> 'break_ties': 'True',
>  'decision_function_shape': 'ovr',
>  'kernel': 'linear'}

I could also use `LinearSVC` to implement this, I can run my own `select_param_mult()` method:

> ```python
> def select_param_linear_mult(
>     X, y, k=5, metric="accuracy", C_range=[], loss="hinge", penalty="l2", dual=True
> ):
>     best_performance = -1;
>     best_performance_c = -1;
> 
>     for c in C_range:
>         print("Checking Param: C=%f" % (c))
>         oto_clf = sklearn.svm.SVC(kernel="linear", C=c,  decision_function_shape="ovo")
>         curr_performance = cv_performance_mult(oto_clf,X,y,k,metric);
>         if curr_performance > best_performance:
>             print("Better Performance Found: %f" % curr_performance)
>             best_performance = curr_performance;
>             best_performance_c = c;
>     print("ONETOONE:")
>     print(best_performance)
>     print(best_performance_c)
> 
>     for c in C_range:
>         print("Checking Param: C=%f" % (c))
>         otr_clf = sklearn.svm.LinearSVC(penalty=penalty, C=c, loss=loss, dual=dual, multi_class="ovr")
>         curr_performance = cv_performance_mult(otr_clf,X,y,k,metric);
>         if curr_performance > best_performance:
>             print("Better Performance Found: %f" % curr_performance)
>             best_performance = curr_performance;
>             best_performance_c = c;
>     print("ONETOREST:")
>     print(best_performance)
>     print(best_performance_c)
>     return best_performance_c
> ```

Then I runned:

 ```python
 select_param_linear_mult(X_Useful,Y_train,C_range=[0.01,0.1,1,10,100,1000],loss='hinge')
 select_param_linear_mult(X_Useful,Y_train,C_range=[0.01,0.1,1,10,100,1000],loss='squared_hinge')
 ```

The best param I gained from this is *loss = 'squared_hinge'; C = 10*  Moreover I did something interesting, I tried to figure out better C through more accurate tries.  `select_param_linear_mult_a(X_Useful,Y_train,C_range=np.arange(1,11,0.5),loss='squared_hinge')` Eventually I finalized my model as `clf = sklearn.svm.LinearSVC(C=6.5, loss='squared_hinge', multi_class="ovr")` Which have a cv-performance score of **0.811555555555**

Although this score wasn't as great as in binary classification, but I believe that was pretty much decent intuitively since the problem is much harder when we added a "neutral" case into consideration, which means the classification criterion on both sides becomes harder. Sometimes it is even hard for me to classify between "neutral" and "gratitude" or "sadness".

![Some](C:\Users\MI\AppData\Roaming\Typora\typora-user-images\image-20230206133457060.png "Some example of classification problem using my classifier")(Some example of classification problem using my classifier) 

*Note: some of my testing and trying code were in jupyter notebook. I only included a neat version of the final realization of model and prediction in the project1.py. This write-up described all my tries to approach this challenge.











