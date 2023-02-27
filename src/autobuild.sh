#!/bin/bash


js_target_file='bloglib.js'
echo "const blogs_name = [" > ${js_target_file};


echo "'Intro_To_Intro'," >> ${js_target_file};
echo "'Cats_Blog'," >> ${js_target_file};

for file in `ls -a`
do
    if [ ${file##*.}a = 'mda' ]; 
    then
        target_file=blog/${file%%.*}.html;
        cat part/sample_m1.part > ${target_file};
        pandoc ${file} >> ${target_file};
        cat part/sample_m2.part >> ${target_file};
        echo '' >> ${target_file};
        echo "        const blog_name = '${file%%.*}'" >> ${target_file};
        cat part/sample_m3.part >> ${target_file};

        echo "'${file%%.*}'," >> ${js_target_file};
    fi
done

echo "];" >> ${js_target_file};
cat part/bloglib_part.js >> ${js_target_file};


