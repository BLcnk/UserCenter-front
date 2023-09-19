import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '小白个人练习项目';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'xiaobaiUserCenter',
          title: '小白的用户中心',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> 小白 Github
            </>
          ),
          href: 'https://github.com/BLcnk',
          blankTarget: true,
        },
        {
          key: 'xiaobaiCSDN',
          title: '小白的CSDN',
          href: 'https://www.csdn.net/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
