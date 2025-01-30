<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .calculator {
            max-width: 300px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        #display {
            width: 100%;
            height: 50px;
            font-size: 24px;
            text-align: right;
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .btn {
            font-size: 20px;
            margin: 1px;
        }
    </style>
</head>

<body>
    <div class="calculator">
        <!-- Display -->
        <input type="text" id="display" class="form-control" disabled>

        <!-- Buttons -->
        <div class="row">
            <div class="p-0 m-0 pe-2 col-3">
                <button onclick="clearDisplay()" class="btn btn-danger w-100">AC</button>
            </div>
            <div class="p-0 m-0 pe-2 col-3">
                <button onclick="clearEntry()" class="btn btn-warning w-100">CE</button>
            </div>
            <div class="p-0 m-0 pe-2 col-3">
                <button onclick="appendToDisplay('/')" class="btn btn-secondary w-100">/</button>
            </div>
            <div class="p-0 m-0 pe-2 col-3">
                <button onclick="appendToDisplay('*')" class="btn btn-secondary w-100">*</button>
            </div>
        </div>

        <div class="row">
            <div class="p-0 m-0 pe-2 col-3">
                <button onclick="appendToDisplay('7')" class="btn btn-light w-100">7</button>
            </div>
            <div class="p-0 m-0 pe-2 col-3">
                <button onclick="appendToDisplay('8')" class="btn btn-light w-100">8</button>
            </div>
            <div class="p-0 m-0 pe-2 col-3">
                <button onclick="appendToDisplay('9')" class="btn btn-light w-100">9</button>
            </div>
            <div class="p-0 m-0 pe-2 col-3">
                <button onclick="appendToDisplay('-')" class="btn btn-secondary w-100">-</button>
            </div>
        </div>

        <div class="row">
            <div class="p-0 m-0 pe-2 col-3">
                <button onclick="appendToDisplay('4')" class="btn btn-light w-100">4</button>
            </div>
            <div class="p-0 m-0 pe-2 col-3">
                <button onclick="appendToDisplay('5')" class="btn btn-light w-100">5</button>
            </div>
            <div class="p-0 m-0 pe-2 col-3">
                <button onclick="appendToDisplay('6')" class="btn btn-light w-100">6</button>
            </div>
            <div class="p-0 m-0 pe-2 col-3">
                <button onclick="appendToDisplay('+')" class="btn btn-secondary w-100">+</button>
            </div>
        </div>

        <div class="row">
            <div class="col-9 row p-0 m-0">
                <div class="col-4 p-0 m-0 pe-2">
                    <button onclick="appendToDisplay('1')" class="btn btn-light w-100">1</button>
                </div>
                <div class="col-4 p-0 m-0 pe-2">
                    <button onclick="appendToDisplay('2')" class="btn btn-light w-100">2</button>
                </div>
                <div class="col-4 p-0 m-0 pe-2">
                    <button onclick="appendToDisplay('3')" class="btn btn-light w-100">3</button>
                </div>
                <div class="p-0 m-0 pe-2 col-6">
                    <button onclick="appendToDisplay('0')" class="btn btn-light w-100">0</button>
                </div>
                <div class="p-0 m-0 pe-2 col-6">
                    <button onclick="appendToDisplay('.')" class="btn btn-light w-100">.</button>
                </div>
            </div>
            <div class="col-3 p-0 m-0 pe-2">
                <button onclick="calculate()" class="btn btn-success h-100 w-100 h-100">=</button>
            </div>
        </div>

    </div>
    <script>
        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function clearEntry() {
            let currentDisplay = document.getElementById('display').value;
            document.getElementById('display').value = currentDisplay.slice(0, -1);
        }

        function calculate() {
            try {
                const result = eval(document.getElementById('display').value);
                document.getElementById('display').value = result;
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }
    </script>
</body>

</html>
