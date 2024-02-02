package com.ican.service;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.ican.entity.BlogFile;
import com.ican.entity.SiteConfig;
import com.ican.mapper.BlogFileMapper;
import com.ican.mapper.SiteConfigMapper;
import com.ican.strategy.context.UploadStrategyContext;
import com.ican.utils.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Objects;

import static cn.hutool.core.lang.Console.log;
import static com.ican.constant.CommonConstant.FALSE;
import static com.ican.constant.RedisConstant.SITE_SETTING;
import static com.ican.enums.FilePathEnum.CONFIG;

/**
 * 网站配置服务
 *
 * @author ican
 */
@Service
public class SiteConfigService extends ServiceImpl<SiteConfigMapper, SiteConfig> {

    @Autowired
    private SiteConfigMapper siteConfigMapper;

    @Autowired
    private RedisService redisService;

    @Autowired
    private UploadStrategyContext uploadStrategyContext;

    @Autowired
    private BlogFileMapper blogFileMapper;

    public SiteConfig getSiteConfig() {
      /*  SiteConfig siteConfig = redisService.getObject(SITE_SETTING);
       //如果缓存中没有，从数据库中加载
        if (Objects.isNull(siteConfig)) {
             //从数据库中加载
            siteConfig = siteConfigMapper.selectById(1);
            //然后写入缓存
            redisService.setObject(SITE_SETTING, siteConfig);
        }*/
        //TODO 前面这段还是有点问题,因为我现在还是不大会Stream流去获取JSON里的数据
        //先暂时改成直接从数据库中查询吧
        SiteConfig siteConfig = siteConfigMapper.selectById(1);
        return siteConfig;
    }

    public void updateSiteConfig(SiteConfig siteConfig) {
        baseMapper.updateById(siteConfig);
        redisService.deleteObject(SITE_SETTING);
    }

    public String uploadSiteImg(MultipartFile file) {
        // 上传文件
        String url = uploadStrategyContext.executeUploadStrategy(file, CONFIG.getPath());
        //CONFIG.getpath()是获取config/ 这个字符串
       // System.out.println("path :  "+url);

        try {
            // 获取文件md5值
            String md5 = FileUtils.getMd5(file.getInputStream());
            // 获取文件扩展名
            String extName = FileUtils.getExtension(file);
            BlogFile existFile = blogFileMapper.selectOne(new LambdaQueryWrapper<BlogFile>()
                    .select(BlogFile::getId)
                    .eq(BlogFile::getFileName, md5)
                    .eq(BlogFile::getFilePath, CONFIG.getFilePath()));
            if (Objects.isNull(existFile)) {
                // 保存文件信息
                BlogFile newFile = BlogFile.builder()
                        .fileUrl(url)
                        .fileName(md5)
                        .filePath(CONFIG.getFilePath())
                        .extendName(extName)
                        .fileSize((int) file.getSize())
                        .isDir(FALSE)
                        .build();
                blogFileMapper.insert(newFile);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return url;
    }
}




