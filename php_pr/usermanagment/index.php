<!DOCTYPE html>
<html>

<head>
    <title>Two Column Layout</title>
    <style>
        body {
            margin: 0;
            padding: 0;
        }

        .container {
            display: flex;
            flex-direction: row;
            height: 100vh;
        }

        .sidebar {
            flex: 0 0 200px;
            background-color: #f2f2f2;
            padding: 10px;
            box-sizing: border-box;
        }

        .content {
            flex: 1;
            padding: 10px;
            box-sizing: border-box;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="sidebar">
            <ul>
                <li><a href="?page=home">Home</a></li>
                <li><a href="?page=about">About</a></li>
                <li><a href="?page=services">Services</a></li>
                <li><a href="?page=contact">Contact</a></li>
            </ul>
        </div>
        <div class="content">
            <?php
            $page = isset($_GET['page']) ? $_GET['page'] : 'home';

            switch ($page) {
                case 'home':
                    echo '<h1>Welcome to our website!</h1>';
                    break;
                case 'about':
                    echo '<h1>About Us</h1>';
                    echo '<p>We are a company that specializes in providing high-quality products and services to our customers.</p>';
                    break;
                case 'services':
                    echo '<h1>Our Services</h1>';
                    echo '<ul>';
                    echo '<li>Product A</li>';
                    echo '<li>Product B</li>';
                    echo '<li>Product C</li>';
                    echo '</ul>';
                    break;
                case 'contact':
                    echo '<h1>Contact Us</h1>';
                    echo '<p>Feel free to contact us at any time with your questions or concerns.</p>';
                    break;
            }
            ?>
        </div>
    </div>
</body>

</html>